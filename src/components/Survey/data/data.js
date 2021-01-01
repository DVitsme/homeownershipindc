export default {
  sectionTitle: [
    {
      jsonTitle: "aboutYou",
      displayTitle: "About You",
      subTitle: null,
    },
    {
      jsonTitle: "yourHousehold",
      displayTitle: "Your Household",
      subTitle: "Income and wealth",
    },
    {
      jsonTitle: "yourNeighborhood",
      displayTitle: "Your Neighborhood",
      subTitle: null,
    },
    {
      jsonTitle: "yourNeighbors",
      displayTitle: "Your Neighborhors",
      subTitle:
        "About how many of your nearest neighbors (the people living in the eight or nine homes closest to yours on the street or in your building): ",
    },
  ],
  aboutYou: [
    {
      name: "Name",
      value: "",
      type: "input",
      placeholder: "Enter Your Name",
    },
    {
      name: "Street Address",
      value: "",
      type: "input",
      placeholder: "Enter Your Street Address",
    },
    {
      name: "Zip Code",
      value: "",
      type: "input",
      placeholder: "Enter Your Zip Code",
    },

    {
      name: "Current employment status",
      type: "radio",
      options: [
        { name: "Working full time", checked: false },
        { name: "Working part time", checked: false },
        { name: "Retired", checked: false },
        { name: "Unemployed", checked: false },
      ],
    },
    {
      name: "Highest level of education completed",
      type: "radio",
      options: [
        { name: "9th to 12th grade, no diploma", checked: false },
        { name: "High school graduate (includes equivalency)", checked: false },
        { name: "Some college, no degree", checked: false },
        { name: "Associate's degree", checked: false },
        { name: "College degree", checked: false },
        { name: "Graduate or professional degree", checked: false },
      ],
    },
    {
      name: "Where you born in Washington DC?",
      type: "radio",
      options: [
        { name: "Yes", checked: false },
        { name: "No", checked: false },
      ],
    },
  ],
  yourHousehold: [
    {
      name: "What is your household income in the past 12 months?",
      type: "radio",
      options: [
        { name: "Less than $25,000", checked: false },
        { name: "$25,000 to $50,000", checked: false },
        { name: "$50,000 to $75,000", checked: false },
        { name: "$75,000 to $100,000", checked: false },
        { name: "$100,000 to $150,000", checked: false },
        { name: "$150,000 to $200,000", checked: false },
        { name: "More than $200,000", checked: false },
      ],
    },
    {
      name: "Year home was purchased?",
      value: "",
      type: "input",
      placeholder: "Year home was purchased",
    },
    {
      name: "The current value of your home?",
      value: "",
      type: "input",
      placeholder: "The current value of your home",
    },
    {
      name: "The current value of all assets excluding your home?",
      type: "radio",
      value: "",
      options: [
        { name: "Less than $25,000  ", checked: false },
        { name: "$25,000 to $50,000  ", checked: false },
        { name: "$50,000 to $75,000  ", checked: false },
        { name: "$75,000 to $100,000  ", checked: false },
        { name: "$100,000 to $150,000  ", checked: false },
        { name: "$150,000 to $200,000  ", checked: false },
        { name: "More than $200,000  ", checked: false },
      ],
    },
    {
      name:
        "Outstanding debt (including mortgage, educational loans, credit card balance, health care, car loan, etc.)?",
      type: "radio",
      options: [
        { name: "Less than $25,000 ", checked: false },
        { name: "$25,000 to $50,000 ", checked: false },
        { name: "$50,000 to $75,000 ", checked: false },
        { name: "$75,000 to $100,000 ", checked: false },
        { name: "$100,000 to $150,000 ", checked: false },
        { name: "$150,000 to $200,000 ", checked: false },
        { name: "More than $200,000 ", checked: false },
      ],
    },
    {
      name:
        "On a scale of 1 (Not at all satisfied) to 10 (Very satisfied), how satisfied are you with your net worth?",
      type: "radio",
      options: [
        { name: "1", checked: false },
        { name: "2", checked: false },
        { name: "3", checked: false },
        { name: "4", checked: false },
        { name: "5", checked: false },
        { name: "6", checked: false },
        { name: "7", checked: false },
        { name: "8", checked: false },
        { name: "9", checked: false },
        { name: "10", checked: false },
      ],
    },
    {
      name:
        "Do you think any of the following have impacted your net worth (please check all that apply)?",
      type: "checkbox",
      options: [
        { name: "Fluctuation in income", checked: false },
        { name: "Mortgage discrimination", checked: false },
        { name: "Structural racism", checked: false },
        { name: "Discrimination in the workplace", checked: false },
        { name: "Home valuation", checked: false },
        { name: "Emergency situations", checked: false },
        { name: "None of these", checked: false },
      ],
    },
  ],
  yourNeighborhood: [
    {
      name:
        "Some people feel their neighborhood is a real home to them, while other people feel their neighborhood is just a place where they happen to live. Which one of these views comes closest to the way you feel about your own neighborhood?",
      type: "radio",
      options: [
        { name: "Just a place to live", checked: false },
        { name: "A real home", checked: false },
      ],
    },
    {
      name:
        "How strong would you say your ties to the neighborhood are? 1 (Not Strong At All) - 5 (Very Strong)",
      type: "radio",
      options: [
        { name: "1", checked: false },
        { name: "2", checked: false },
        { name: "3", checked: false },
        { name: "4", checked: false },
        { name: "5", checked: false },
      ],
    },
    {
      name: "If you had to move, how much would you miss your neighborhood?",
      type: "radio",
      options: [
        { name: "Not very much", checked: false },
        { name: "Just a little", checked: false },
        { name: "Somewhat", checked: false },
        { name: "Quite a bit", checked: false },
        { name: "Don't know", checked: false },
      ],
    },
    {
      name:
        "Suppose a couple told you they are considering purchasing a home in your neighborhood. In your opinion, would a home in your neighborhood be a good financial investment, or would they be better off investing their money elsewhere in DC? Or perhaps in MD or VA?",
      type: "radio",
      options: [
        { name: "This neighborhood is a good investment", checked: false },
        { name: "Better off in a different part of DC", checked: false },
        { name: "Better off in MD or VA", checked: false },
        { name: "Don't know ", checked: false },
      ],
    },
    {
      name: "How would you rate your neighborhood? 1 (Poor) - 5 (Excellent)",
      type: "radio",
      options: [
        { name: "1 ", checked: false },
        { name: "2 ", checked: false },
        { name: "3 ", checked: false },
        { name: "4 ", checked: false },
        { name: "5 ", checked: false },
      ],
    },
  ],

  yourNeighbors: [
    {
      name: "Do you happen to know by name?",
      type: "radio",
      options: [
        { name: "None of them             ", checked: false },
        { name: "A few of them             ", checked: false },
        { name: "About half of them             ", checked: false },
        { name: "Most of them             ", checked: false },
        { name: "All of them             ", checked: false },
      ],
    },
    {
      name: "Said hello or stopped to speak?",
      type: "radio",
      options: [
        { name: "Never          ", checked: false },
        { name: "A few times          ", checked: false },
        { name: "Once or twice a month          ", checked: false },
        { name: "Once or twice a week          ", checked: false },
        { name: "Almost every day          ", checked: false },
      ],
    },
    {
      name: "Had a talk longer than ten minutes?",
      type: "radio",
      options: [
        { name: "Never       ", checked: false },
        { name: "A few times       ", checked: false },
        { name: "Once or twice a month       ", checked: false },
        { name: "Once or twice a week       ", checked: false },
        { name: "Almost every day       ", checked: false },
      ],
    },
    {
      name: "Borrowed something small like a cup of sugar?",
      type: "radio",
      options: [
        { name: "Never      ", checked: false },
        { name: "A few times      ", checked: false },
        { name: "Once or twice a month      ", checked: false },
        { name: "Once or twice a week      ", checked: false },
        { name: "Almost every day      ", checked: false },
      ],
    },
    {
      name:
        "Gave each other a helping hand (shoveling snow, home repairs, lawn work, etc.)?",
      type: "radio",
      options: [
        { name: "Never", checked: false },
        { name: "A few times", checked: false },
        { name: "Once or twice a month", checked: false },
        { name: "Once or twice a week", checked: false },
        { name: "Almost every day", checked: false },
      ],
    },
    {
      name:
        "Have you discuss important personal matters such as divorce, change in jobs, etc with any of your neighbors?",
      type: "radio",
      options: [
        { name: "Never   ", checked: false },
        { name: "A few times   ", checked: false },
        { name: "Once or twice a month   ", checked: false },
        { name: "Once or twice a week   ", checked: false },
        { name: "Almost every day   ", checked: false },
      ],
    },
    {
      name: "Invited each other over for dinner, drinks or a movie at home?",
      type: "radio",
      options: [
        { name: "Never ", checked: false },
        { name: "A few times ", checked: false },
        { name: "Once or twice a month ", checked: false },
        { name: "Once or twice a week ", checked: false },
        { name: "Almost every day ", checked: false },
      ],
    },
    {
      name: "Got together socially outside of the neighborhood?",
      type: "radio",
      options: [
        { name: "Never  ", checked: false },
        { name: "A few times  ", checked: false },
        { name: "Once or twice a month  ", checked: false },
        { name: "Once or twice a week  ", checked: false },
        { name: "Almost every day  ", checked: false },
      ],
    },
  ],
};
