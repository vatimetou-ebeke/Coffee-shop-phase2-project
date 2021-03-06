import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button, makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),

    }
  }
}));

const image = "https://images5.alphacoders.com/905/905439.jpg"
const styles = {
  container: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "100vh",
    width: "cover",
    backgroundSize: "cover",
    backgroundPosition: 'center',

  },
}

function ItemForm({ handleAddItem }) {
  const [name, setName] = useState("");
  const [description, SetDescription] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
  
    const itemData = {
      name: name,
      image: image,
      description: description,
      price: `${price}$`,
      isInCart: false,
    };
  //clear all input values in the form
  setName('');
  SetDescription('');
  setImage('');
  setPrice('');


 


    // console.log("name:", name);
    // console.log("discribtion:", discribtion);

    fetch(" http://localhost:3001/coffies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => handleAddItem(newItem));

     
  }

  const classes = useStyles();



  return (
    <>

      <form className={classes.root} onSubmit={handleSubmit}>
        <FormControl

        >
          <InputLabel>Name</InputLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>image_url</InputLabel>
          <Input
            value={image}
            onChange={(e) => setImage(e.target.value)} />
        </FormControl>

        <FormControl variant="outlined" color="white">
          <InputLabel>description</InputLabel>
          <Input
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
            label="describtion"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>price</InputLabel>
          <Input
            id="component-filled"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="price"
          />
        </FormControl>
        <Button color="primary" type="submit"
          style={{ top: 15, right: 20 }}
        >Add to List</Button>
      </form>

      <div style={styles.container}>

      </div>
    </>
  );
}

export default ItemForm;
