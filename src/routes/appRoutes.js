import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from './../components/HomePage/index';
import AddContact from './../components/AddContact/index';
import EditConatct from './../components/EditConatct/index';

const AppRoutes = () => (
    <div style={{paddingBottom: "53px"}}>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/edit-contact/:id" element={<EditConatct />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
    </div>
);

export default AppRoutes;
