# Application for Stackline

A minimal application for demonstration purposes, built for Stackline.

The application supports one view with the following file pathing:

- App
  - Router
    - Landing
      - Item
        - ItemDetails
      - LineChart
      - DataGrid

## Key Considerations

### Dependencies

- **MaterialUI** was chosen for our UI library since it's high quality, well-maintained, and something I'm comfortable with.
  - For our data visualization components, `@mui/x-charts` and `@mui/x-data-grid` were chosen.
- **CSS Modules** were chosen because CSS-in-JSX (styled-components) is clutter prone and is also less performant than raw CSS. With modules we do not have to worry about global scope issues. This is my preferred method.
- **Redux (RTK)** was listed as a requirement in the specs and therefore used
  - The use of Redux here is strictly for demonstration purposes. Depending on the full functionality of the app, I might have preferred not using it.
  - As an alternative, the modern Context/Reducer pattern is a much simpler alternative.
- **React Router DOM** for industry standard browser routing. I did not add any routes for simplicity, only the base path will be served.
- **Dayjs** was chosen to manage datetimes properly. Specifically to extract the abbreviated month from the `weekEnding` string. Dayjs is a robust and full featured library I have confidence in.
- I included some industry standard/my preferred configuration dependencies for setting up high quality React codebases (ESLint, Prettier, Babel, Husky)
  - I didn't set up Husky but it's useful for triggering pre-commit/post-pull actions (such as lint and compile checks). This saves a lot of remote CI/CD resources by delegating them to the developer's local machine. We do still want those checks in remote, but we should expect them to pass 99.99% of the time.

### Additional Notes

- The data fetch implementation is a bit weird because we're faking a real async/await behavior. We're also storing this data in Redux (for demonstration) which is not necessary (it depends).
  - Also, there is a chronological dependency (high risk) in data formatting where our graphs will break if the imported data is not in chronological order. There a few ways to address this but I left it since a proper solutions requires information I do not have.
- A GraphQL API (Relay preferably) would allow us to store all this data in a powerful global cache on the frontend and statically generate hooks/types from this API. Relay also saves us the trouble of "prop-drilling" and the "render-as-you-fetch" pattern is very performant and reduces data bloat.
- I 'any'-typed a few things to save time, especially `data` because these typings would ideally be generated by introspecting our API servers.
- All the data formatting functions in `LandingPage.tsx` could easily be moved out or handled inside Redux. This is pretty up in the air and depends on a lot of things, and since I don't have anyone to discuss with I just left it as an open item.
  - Generally speaking, data should appear directly where it is used. That's the best way to write safe and fast React. But, this is a little difficult and redundant with our simple configuration and lack of more information so I accepted some tradeoffs.
    - I chose to make the data visualization components generic enough to be reusable, which means lifting the data access one level higher (not ideal). Sometimes reusable components are helpful but I find often times they are a burden.
- I added some helpful utility types and functions but did not use them all. I decided to leave them in to provide an idea of the utility patterns I prefer to follow.
- Also when it comes to design systems, I hard-coded things for the sake of demonstration but ideally there would be some automated scripts that auto-generate global .css files for variables and classes. These scripts can even be written to pull and modify from an existing design language (e.g. MaterialUI)
- I hard-coded `img` for the item image but realistically there would probably be reusable components to handle various media types. These could provider performance for progressive loading, loading skeletons, responsiveness, etc.
- I also did not spend much time on loading states, error handling/boundaries, and many other things like logging. I figured they would be overkill.
- The app is more-or-less responsive on web but I did not spend the extra time to double check on every browser and resolution. I also did not add any mobile responsiveness.
  - **For the best experience, please view the app on Safari using a Desktop or Laptop**

Feel free to reach out with any additional questions!
