"use client";

import { postItem } from "@/services/postItem";
import React from "react";

export const Form = () => {
  const [item, setItem] = React.useState({ name: "", description: "", id: "" });

  const handleSubmit = () => {
    postItem(item);
  };

  const handleChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, name: e.target.value });
  };

  const handleChangeItemDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItem({ ...item, description: e.target.value });
  };

  return (
    <form>
      <label htmlFor="ItemName">item name</label>
      <input
        type="text"
        name="ItemName"
        id="ItemName"
        onChange={handleChangeItemName}
        className="text-black"
      />

      <label htmlFor="ItemDescription">item description</label>
      <input
        type="text"
        name="ItemDescription"
        id="ItemDescription"
        onChange={handleChangeItemDescription}
        className="text-black"
      />

      <button type="button" onClick={handleSubmit} className="bg-red-500">
        Submit
      </button>
    </form>
  );
};
