import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import formatCurrencyIDR from "../../utils/formatCurrencyIDR";
import Facility from "../Facility";
import Colors from "../../utils/Colors";
import TransactionStatusBadge from "../TransactionStatusBadge";

const getRandomImage = () => {
  const baseUrl = "https://source.unsplash.com/";
  const imageSize = "800x600";
  return `${baseUrl}${imageSize}/?house=${Math.random()}`;
};

export default TransactionItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: getRandomImage() }} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.titleLocationPriceContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>
                {item.city}, {item.province}
              </Text>
              <Text style={styles.price}>
                {formatCurrencyIDR(item.price)} / Bulan
              </Text>
            </View>
            <TransactionStatusBadge status={item.status} date={item.date} />
          </View>
          <View style={styles.facilityContainer}>
            <Facility
              wifi={item.isWifi}
              parking={item.isParking}
              airConditioner={item.isAc}
            />
            <View style={styles.genderContainer}>
              <Image
                style={{  width: item.gender == "campuran" ? 37 : 25,
                height:item.gender == "campuran" ? 30 : 25,
                marginRight: 5, }}
                source={
                  item.gender == "male"
                    ? require("../../../assets/icons/male.jpg")
                    : item.gender == "campuran" ?  require("../../../assets/icons/mix.jpg") : require("../../../assets/icons/female.jpg")
                }
              />
              <Text style={styles.genderText}>
                {item.gender == "male" ? "Male" : item.gender == "campuran" ? "Mix" : "Female"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titleLocationPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: Colors.GREY,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.GREEN,
  },
  facilityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  genderIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  genderText: {
    fontSize: 13,
  },
});
