"use client";

import {Suspense} from "react";
import {Alert} from "@mui/material";
import type {BlockComponent} from "@uniia/strapi-sdk";
import {blockRegistry} from "../../lib/blocks/registry";

export function BlockRenderer({block}: {block: BlockComponent}) {
  const entry = (blockRegistry as any)[block.__component];
  if (!entry) {
    return <Alert severity="warning">Невідомий тип блоку: {block.__component}</Alert>;
  }
  const {Component, mapProps} = entry;
  const props = mapProps(block as any);
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
}
