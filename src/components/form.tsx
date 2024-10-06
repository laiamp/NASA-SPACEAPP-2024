import React from "react";
import RegionForm from "./form/region_form";
import RegionFormWithMap from "./form/region_form_with_map";

function Rform() {
    return (
        <div>
            <h2>Welcome to FieldFlow</h2>
            <p>Define tu parcela!</p>
            <RegionFormWithMap />
        </div>
    );
};

export default React.memo(Rform);
