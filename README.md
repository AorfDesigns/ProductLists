# E-commerce Product List

This project is a simple e-commerce product listing page built with React and TailwindCSS. It features filtering by category, sorting by various criteria, and displaying product information with a clean, modern design.

## Features

- **Product Listing**: Fetches and displays a list of products from a remote API.
- **Filtering**: Allows filtering products by categories.
- **Sorting**: Enables sorting products by price and rating.
- **Responsive Design**: Adjusts layout for different screen sizes.
- **Rating Icons**: Displays product ratings using star icons.
- **Truncated Descriptions**: Truncates long product descriptions with a "Read More" option.
- **Background Coloring**: Adds a background color only to the product image.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **FontAwesome**: An icon library for adding icons to the project.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/AorfDesigns/product-list.git
    cd product-list
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Run the development server:

    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

### Fetching Products

The application fetches products from a dummy API: `https://dummyjson.com/products`.

### Filtering and Sorting

- **Filter by Category**: Use the dropdown to filter products by categories such as "Beauty", "Furniture", and "Groceries".
- **Sort by**: Use the dropdown to sort products by price (low to high or high to low) and rating.

### Product Cards

Each product card displays:
- Product image with a background color.
- Product title.
- Price.
- Rating with star icons.
- Stock information.
- Truncated description with a "Read More" button for longer texts.
- Tags associated with the product.

### Custom Styles

Custom styles are applied using TailwindCSS. The product image has a distinct background color, while the rest of the content remains outside this background color for a cleaner look.

## Customization

### Adding More Categories

To add more categories, modify the category options in the `handleCategoryChange` function.

### Changing Sort Criteria

To add or change sorting criteria, modify the `handleSortChange` function and the sorting logic in the `sortedProducts` computation.

### Changing Fonts

The project uses Google Fonts. To change the fonts, update the `link` tag in `index.html` and the CSS styles in `App.css`.

### Example:

#### `public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
