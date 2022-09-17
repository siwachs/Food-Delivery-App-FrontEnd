import { ScrollView, Platform } from "react-native";
import React, { useState, useEffect } from "react";

//Components
import CategoryCard from "./CategoryCard";

//Sanity
import sanityClient, { urlFor } from "../../../../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=="category"]
    `
      )
      .then((data) => {
        if (data) {
          setCategories(data);
        }
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 12,
        flexDirection: "row-reverse",
      }}
      horizontal
      showsHorizontalScrollIndicator={Platform.OS == "web" ? true : false}
    >
      {categories.length !== 0 &&
        categories?.map((category) => (
          <CategoryCard
            key={category._id}
            imgUrl={urlFor(category.image).width(300).url()}
            title={category.name}
          ></CategoryCard>
        ))}
    </ScrollView>
  );
};

export default Categories;
