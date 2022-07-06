import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Toolbar, Typography, Tabs, Tab } from "@mui/material";
import "./Nav.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Data = [
  "ALL RECIPES",
  "BREAKFAST",
  "SALAD",
  "SOUP",
  "DINNER",
  "DESSERT",
  "FAVORITES",
];

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar className="tabs">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <Tabs>
            {Data.map((e) => {
              return <Tab className="tab" label={e}></Tab>;
            })}

            <Search className="search">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Tabs>
        </Typography>
      </Toolbar>
      <Typography variant="h4" className="text">
        <b>What to Cook This June</b>
      </Typography>

      <div className="card">
        <Typography>
          <img
            className="imgs"
            src="https://cookieandkate.com/images/2019/12/cookie-and-kate-top-10-recipes-of-2019.jpg"
            alt="img"
          />
        </Typography>
        <Typography variant="h6">
          <p className="para">
            <b>Why is this year is going by so quickly?</b> Watching our baby
            grow bigger makes me acutely aware of the days going by, though the
            months are a blur since the nights are still so long. I’m also
            watching my dog, Cookie, grow older. A few weeks ago, I realized
            that she can’t hear me any more. She’s not feeling well at the
            moment and I’m working with the vets to get her better. Cookie is
            approximately fourteen years old now, and we’re having more
            conversations about her quality of life. Watching her slow down
            makes my heart ache and I’m loving on her as much as possible. I
            know she has a lot of fans here, so I wanted to fill you in. Send
            her some love if you will? This month, seasonal produce options are
            expanding to include fresh fruit like blueberries and strawberries,
            rhubarb and cherries. I think I’ll make a crisp soon—the only
            question is which kind (blueberry, mixed berry or strawberry
            rhubarb?). Asparagus and spring peas are on the decline, so get them
            while you can. Stay well! Avocado
          </p>
        </Typography>
      </div>

      <Typography variant="h4" className="text">
        <b>Avocado</b>
      </Typography>
      <div className="card">
        <Typography>
          <img
            className="imgs"
            src="https://cookieandkate.com/images/2017/05/how-to-make-vegetable-fried-rice-1.jpg"
            alt="img"
          />
        </Typography>
        <Typography variant="h6">
          <p className="para">
            Gluten free and vegan “Another dinner success! This was surprisingly
            tasty. I honestly passed this up thinking “eh” but then my friends
            had a fiesta dinner and I was dying for an excuse not to eat their
            steak or ground beef tacos so I made the refried beans for my tacos.
            Tonight I made the avocado sauce and pickled onions with it….YUM.
            And super easy!!” – Erin Watching our baby grow bigger makes me
            acutely aware of the days going by, though the months are a blur
            since the nights are still so long.
          </p>
        </Typography>
      </div>

      <Typography variant="h4" className="text">
        <b>50+ Fresh Memorial Day Recipes</b>
      </Typography>
      <div className="card">
        <Typography>
          <img
            className="imgs"
            src="https://cookieandkate.com/images/2020/05/healthy-memorial-day-recipes-768x1151.jpg"
            alt="img"
          />
        </Typography>
        <Typography variant="h6">
          <p className="para">
            Our cookbook, Love Real Food, is here! Get your copy ↣Love Real Food
            50+ Fresh Memorial Day Recipes 15 Comments healthy memorial day
            recipes We’ve almost made it to the weekend! Here are 50+ fresh,
            healthy and delicious recipes to commemorate Memorial Day. I’ve
            organized them by breakfast and brunch, appetizers and dips, salads
            and sides, main dishes, desserts and sweet treats, and cold drinks.
            I pulled all of these recipes from the “Independence Day” category,
            so check there for even more options. In actuality, these recipes
            are perfectly suited for summer parties from now through Labor Day.{" "}
          </p>
        </Typography>
      </div>
    </Box>
  );
}

//reduce code
//website
