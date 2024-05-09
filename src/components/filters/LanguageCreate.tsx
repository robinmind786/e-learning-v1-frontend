"use client";

import React, { useState } from "react";
import CreateItem, { ItemData } from "../common/CreateItem";

const LanguageCreate = () => {
  const [items, setItems] = useState<ItemData[]>([]);

  const handleItemsChange = (newItems: ItemData[]) => {
    setItems(newItems);
  };

  return (
    <>
      <CreateItem
        isCreate={true}
        itemType="Language"
        onUpdateItems={handleItemsChange}
      />
    </>
  );
};

export default LanguageCreate;
