# Product Management API  Deployed Url https://productmanagement-h0xz.onrender.com/

This is a RESTful API for managing product data.

## Endpoints

### Get All Products
-   **Method:** `GET`
-   **URL:** `/api/products`
-   **Description:** Retrieves a list of all products.
-   **Response:**
    -   **Status 200:** Returns a JSON array of products.
        ```json
        [
            {
                "name": "Product 1",
                "price": 19.99,
                "description": "Description of product 1"
            },
             {
                 "name": "Product 2",
                "price": 29.99,
                 "description": "Description of product 2"
             }
        ]
        ```
    -  **Status 404:** If no products are found, a JSON object with a message will be returned 

### Create a Product
-   **Method:** `POST`
-   **URL:** `/api/products`
-   **Description:** Creates a new product.
-   **Request Body:**
    -   A JSON object with properties:
        ```json
         {
            "name": "Product Name",
            "price": 25.99,
            "description": "Product Description"
         }
        ```
-   **Response:**
     -   **Status 201:** Returns a JSON object confirming the creation.
         ```json
         {
            "msg": "Product created successfully",
             "product": {
                "name": "Product Name",
                "price": 25.99,
                "description": "Product Description"
            }
        }
        ```
     - **Status 500**: Returns an error message if there is any exception 

### Delete a Product

-   **Method:** `DELETE`
-   **URL:** `/api/products/:id` (Replace `:id` with the product's id)
-   **Description:** Deletes a product by its ID.
-   **Response:**
    -   **Status 200:** Returns a JSON object confirming the delete.
         ```json
         {
            "msg": "Product Deleted Successfully",
             "product": {
                "name": "Product Name",
                 "price": 25.99,
                "description": "Product Description"
            }
         }
         ```
    -  **Status 404:** If product with the given ID is not found

## Setup
- Add the following .env file at the project's root directory
