import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

export default function RoomsContainer() {
  return (
    <div>
      Hello from room container
      <RoomsFilter />
      <RoomsList />
    </div>
  );
}
