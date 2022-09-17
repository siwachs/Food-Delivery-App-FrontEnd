import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";

//Components
import Categories from "./BodyComponents/Categories/Categories";
import FeaturedRows from "./BodyComponents/FeaturedRows/FeaturedRows";

//Sanity Client Package is used to connect sanity from frontend @sanity/client and @sanity/image-url
import sanityClient from "../../sanity";

const Body = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->
          }
        }`
      )
      .then((data) => {
        if (data) {
          setFeaturedCategories(data);
        }
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 10,
        paddingTop: 5,
      }}
      className="bg-gray-100"
    >
      <Categories></Categories>

      {/* Featured Rows */}
      <View className="flex-col-reverse">
        {featuredCategories.length !== 0 &&
          featuredCategories?.map((featuredCategory) => (
            <FeaturedRows
              key={featuredCategory._id}
              id={featuredCategory._id}
              title={featuredCategory.name}
              description={featuredCategory.short_description}
              restaurants={featuredCategory.restaurants}
            ></FeaturedRows>
          ))}
      </View>
    </ScrollView>
  );
};

export default Body;
