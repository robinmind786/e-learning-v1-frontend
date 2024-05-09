"use client";

import React, { useState } from "react";
import CreateItem, { ItemData } from "../common/CreateItem";

const CategoryCreate = () => {
  const [items, setItems] = useState<ItemData[]>([]);

  const handleItemsChange = (newItems: ItemData[]) => {
    setItems(newItems);
  };
  return (
    <>
      <CreateItem
        isCreate={true}
        itemType="Category"
        onUpdateItems={handleItemsChange}
      />
    </>
  );
};

export default CategoryCreate;
