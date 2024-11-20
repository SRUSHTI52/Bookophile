# Bookophile

**Bookophile** is a modern, responsive online platform developed using React, HTML, CSS, and Google Fonts. It showcases a collection of books with features like real-time search, categorical filtering, sorting by price, and product detail pages. It also allows users to add books to their cart, and the cart items are displayed dynamically in the navbar.

## Features

### Responsive Design:
- **Desktop**: Three-column layout for browsing books.
- **Tablet**: Two-column layout for better readability.
- **Mobile**: Single-column layout with smooth scrolling.
   
### Real-time Search:
Users can search for books by title or author, and results are shown instantly as they type.

### Categorical Filtering:
Filter books by categories such as genre, price range, or author.

### Sorting by Price:
Sort books by price (ascending or descending) for easier selection.

### Book Details:
Clicking on a book brings up detailed information, including the title, author, publication, description, and price.

### Add to Cart:
Users can add books to their shopping cart. The cart is dynamically updated in the navbar.

### Dynamic Cart Item Count:
The number of items in the cart is displayed in the navbar, updating in real-time as books are added or removed.

### Smooth Transitions & Hover Effects:
Buttons and interactive elements come with smooth transitions for a better user experience.

### Modern Styling:
Clean and modern design using CSS3 techniques, including flexbox and grid, for layout management.

## Technologies Used

- **React**: For dynamic UI components and state management (like cart and search functionality).
- **HTML5**: For the basic structure and content of the webpage.
- **CSS3**: For styling and responsive design.
- **Google Fonts**: For stylish and readable font choices.
- **VS Code**: For code editing and development.

## Installation and Running Locally

To get the application running on your local machine, follow these steps:

### Clone the Repository:
```bash
git clone <repository-url>
```
### Navigate to the Project Folder:
```bash
cd <project-folder>
```
### Install Dependencies:
Run the following command to install the necessary packages:
```bash
npm install
```
### Start the Application:
Run the following command to start the development server:
```bash
npm start
```
Open your browser and go to http://localhost:3000 to view the website locally.


## Libraries and Tools Used

- **React**: For building dynamic UI components and managing the application state.
- **React Router**: For handling navigation between pages.
- **HTML5 & CSS3**: For structuring and styling the website.
- **Google Fonts**: For beautiful and modern font styles.
- **VS Code**: For development and code editing.


## Features Implemented

- **Real-time Search**:  
  Users can search books by title or author. The search results update instantly as the user types.

- **Categorical Filtering**:  
  Books can be filtered by category (genre, author, price range), providing users with an easy way to browse the selection.

- **Sorting by Price**:  
  Books can be sorted in ascending or descending order by price, allowing users to find books that fit their budget.

- **Viewing Product Details**:  
  Clicking on a book provides detailed information such as title, author, price, and description. This is done via a React Router page.

- **Adding to Cart**:  
  Users can add books to their cart, and the cart is displayed in the navbar with the item count.

- **Cart Display**:  
  The navbar dynamically updates to show the number of items in the cart.

- **Navigation**:  
  Smooth navigation between pages and dynamic updates (e.g., adding books to the cart updates the navbar in real-time).


## Challenges and Solutions

- **State Management**:  
  Managing the state of cart items across different components was challenging.

- **Dynamic Search**:  
  Implementing a real-time search feature required efficient filtering of the books list. This was solved using React's state and `useEffect` hook to trigger re-renders and update the list of displayed books based on the search query.

- **Responsiveness**:  
  Ensuring the design works well across devices (desktop, tablet, and mobile) was a challenge. It was overcome by using CSS Grid and Flexbox in combination with media queries to adjust the layout.

## Optional Enhancements

- **Sorting**:  
  Allow users to sort products by price (ascending or descending).

- **Add to Cart Functionality**:  
  - Enable users to add products to a cart.  
  - Display the number of items in the cart.

- **Animations**:  
  Add hover effects or transitions to enhance the user experience.

## Screenshots

- **Home Screen**: 
![image](https://github.com/user-attachments/assets/8ad9c362-b690-43c0-ba48-6aad4866d62c)

- **Desktop View**:  
  ![image](https://github.com/user-attachments/assets/8d4eb7a0-7f50-45f1-9445-f3999232de66)

- **Tablet View**: 
![image](https://github.com/user-attachments/assets/07ba53d5-23ea-47fc-88b4-6d164c85cfb4)

- **Mobile View**:  
![image](https://github.com/user-attachments/assets/0aa64ee4-9bbd-40cb-b452-ea34f4339c1b)

- **Category Filter**:  
![image](https://github.com/user-attachments/assets/57774e35-0e02-4d20-8157-cc8c5992e296)

- **Search Filter**:
![image](https://github.com/user-attachments/assets/c43fcc02-499e-4214-94ff-f528704697d1)

- **Product Details**:  
  ![image](https://github.com/user-attachments/assets/b17eed43-916a-4341-8d23-4351143dce05)

- **Cart Details**:
![image](https://github.com/user-attachments/assets/65d27dc4-0527-419c-b662-fe56d800f74b)


## Demo Video

https://github.com/user-attachments/assets/1d6ff64a-5dbc-4684-9344-05a00a211f76


