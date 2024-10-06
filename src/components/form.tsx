import React from "react";
import RegionFormWithMap from "./form/region_form_with_map";

function Rform() {
    return (
        <div>
            <p>Define your field!</p>
            <RegionFormWithMap />
        </div>
    );
};

export default React.memo(Rform);
