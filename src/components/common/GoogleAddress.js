import React, { useEffect } from "react";

const AddressAutocomplete = ({ onPlaceSelected }) => {
  useEffect(() => {
    const autocompleteInput = document.getElementById("autocomplete");

    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInput,
      {
        types: ["address"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      onPlaceSelected(place);
    });
  }, [onPlaceSelected]);

  return <input type="text" id="autocomplete" placeholder="Enter address" />;
};

export default AddressAutocomplete;
