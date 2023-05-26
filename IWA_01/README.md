<!-- omit in toc -->
# Tally Counter

- [Description](#description)
- [Key Features:](#key-features)
- [User Stories](#user-stories)
- [Techonologies](#techonologies)
- [Process Flow Diagram](#process-flow-diagram)

## Description

The Tally Counter App is a user-friendly and versatile tool designed to help you easily keep track of various counts and numbers in your daily activities. Whether you're a teacher taking attendance, a fitness enthusiast tracking repetitions, an event organizer monitoring attendance, or a researcher recording data, this app provides a convenient and efficient way to tally and record information.

## Key Features:

- Intuitive and Easy to Use: The app features a simple and user-friendly interface, making it easy for anyone to start tallying immediately. The counter is prominently displayed, and a single tap increases the count, allowing for quick and effortless tracking.

- Multiple Counters: The app supports multiple counters, enabling you to simultaneously track different items or activities. Each counter can be labeled or customized according to your specific needs, making it easy to differentiate between counts.

- Count History: The app maintains a comprehensive history of your counts, allowing you to review and analyze your data later. You can access previous counts, view trends, and compare results over time, providing valuable insights and tracking progress.

- Customizable Settings: The app offers customization options to adapt to your preferences. You can personalize the counter display, choose different color themes, adjust sound settings, and configure other features to enhance your counting experience.

- Data Export and Sharing: The app allows you to export your count data in various formats, such as CSV or Excel, facilitating further analysis or integration with other applications. You can also share your counts directly from the app via email, messaging, or social media platforms.

- Offline Functionality: The app works offline, ensuring you can continue tallying even without an internet connection. This feature makes it suitable for use in remote locations or areas with limited connectivity.

- Security and Privacy: The app prioritizes the security and privacy of your data. It does not collect personal information and provides options to secure your counts with a passcode or biometric authentication, ensuring your information remains confidential.

The Tally Counter App is a versatile tool that caters to a wide range of users, from teachers and researchers to fitness enthusiasts and event organizers. Its simplicity, flexibility, and array of features make it an indispensable companion for anyone needing to keep accurate counts in their daily activities. Download the Tally Counter App today and streamline your tallying process with ease.

## User Stories

- As a teacher, I want to use the tally counter app to keep track of the number of students present in the classroom each day, so I can quickly record attendance and identify any missing students.

- As a fitness enthusiast, I want to use the tally counter app during my workout sessions to count the number of repetitions I complete for each exercise, helping me track my progress and set new goals.

- As a event organizer, I want to use the tally counter app to count the number of attendees at a conference or a workshop, allowing me to monitor the turnout and ensure that the venue is not overcapacity.

- As a researcher, I want to use the tally counter app to record data during my experiments, enabling me to track the occurrence of specific events or behaviors accurately and efficiently.

- As a referee, I want to use the tally counter app during a sports match to keep track of the scores or penalties for each team, providing me with a convenient way to maintain accuracy and avoid errors.

- As a birdwatcher, I want to use the tally counter app to record the number of different bird species I observe during a field trip, helping me maintain a comprehensive list of my sightings.

- As a restaurant manager, I want to use the tally counter app to count the number of customers served each day, enabling me to analyze the peak hours and plan staffing accordingly.

- As a student, I want to use the tally counter app to keep track of the number of pages I read while studying, allowing me to measure my progress and stay motivated.

- As a volunteer for a charity event, I want to use the tally counter app to count the number of donations received, helping the organization keep track of their fundraising goals.

- As a gardener, I want to use the tally counter app to record the number of plants or flowers I harvest, aiding me in monitoring the productivity of my garden and tracking seasonal variations.

## Techonologies

- An IDE LIKE VSCode
- Basic JavaScript, CSS & HTML skills
- A web browser like firefox

## Process Flow Diagram

```
    mermaid
graph TD
    A[Start] --> B[Initialize Constants]
    B --> C[Initialize Variables]
    C --> D[Attach Event Listeners]
    D --> E{Is Subtract Clicked?}
    E -- Yes --> F[Update Value]
    F --> G[Disable Add if New Value is Maximum]
    G --> H[Enable Subtract if New Value is Above Minimum]
    H --> D
    E -- No --> I{Is Add Clicked?}
    I -- Yes --> J[Update Value]
    J --> K[Disable Subtract if New Value is Minimum]
    K --> L[Enable Add if New Value is Below Maximum]
    L --> D
    I -- No --> M[End]
```
