 Embed code in the <head> of your html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">

Playfair Display: CSS class for a variable style
// <weight>: Use a value from 400 to 900
// <uniquifier>: Use a unique and descriptive class name

.playfair-display-<uniquifier> {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

DM Sans: CSS class for a variable style
// <weight>: Use a value from 100 to 1000
// <uniquifier>: Use a unique and descriptive class name

.dm-sans-<uniquifier> {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
