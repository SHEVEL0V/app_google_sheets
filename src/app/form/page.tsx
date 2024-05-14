/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const list = ["login", "password"];

export default function Form() {
  return (
    <form
      // action={action}
      className="border rounded-md p-4 bg-slate-400 max-w-96 mx-auto "
    >
      <h1 className="my-4 text-center text-xl text- text-green-800 font-bold font-serif">
        FORM
      </h1>
      <li className="flex flex-col gap-3 ">
        {list.map((item, i) => (
          <TextField key={i} label={item} name={item} />
        ))}
        <Button type="button" variant="contained" onClick={() => onClick()}>
          Sing in
        </Button>
      </li>
    </form>
  );
}
