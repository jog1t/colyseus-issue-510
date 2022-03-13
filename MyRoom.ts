import { Schema, type } from "@colyseus/schema";
import { Client, Room } from "colyseus";

class State extends Schema {
  @type("number")
  number = 0;
  @type("string")
  property = "";
}

export class MyRoom extends Room<State> {
  onCreate() {
    this.setState(new State());

    this.clock.start();

    this.clock.setInterval(() => {
      // THIS IS NOT SYNCED WITH CLIENT
      this.state.property = new Date().toISOString();
      this.state.number = Date.now();
      console.log("Changes state", this.state);
    }, 1000);

    this.onMessage("ping", (client: Client) => {
      console.log(client.sessionId, "pings");
    });
  }

  onJoin(client: Client) {
    console.log(client.sessionId, "joined");
  }

  onLeave(client: Client) {
    console.log(client.sessionId, "left");
  }
}
