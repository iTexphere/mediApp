import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import styles from "./style";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Label,
} from "native-base";
import { connect } from "react-redux";
import { registration } from "../../src/store/actions/index";

import Loader from "../../components/Loader/index";

class Registration extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    nic: "",
    email: "",
    mobilenumber: "",
    city: "",
    district: "",
  };

  handleChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let isError = false;
    if (this.state.firstname.length === 0) {
      alert("First name is required !");
      isError = true;
    } else if (this.state.lastname.length === 0) {
      alert("Last name is required !");
      isError = true;
    } else if (this.state.nic.length === 0) {
      alert("Nic is required !");
      isError = true;
    } else if (this.state.email.length === 0) {
      alert("Email is required !");
      isError = true;
    } else if (this.state.username.length === 0) {
      alert("Username is required !");
      isError = true;
    } else if (this.state.password.length === 0) {
      alert("password is required !");
      isError = true;
    } else if (this.state.district.length === 0) {
      alert("District is required !");
      isError = true;
    } else if (this.state.city.length === 0) {
      alert("City is required !");
      isError = true;
    } else if (this.state.mobilenumber.length === 0) {
      alert("Mobile number is required !");
      isError = true;
    }
    return isError;
  };

  handleSubmit = () => {
    let invalid = this.validate();
    const payload = {
      fast_name: this.state.firstname,
      last_name: this.state.lastname,
      user_name: this.state.username,
      password: this.state.password,
      nic: this.state.nic,
      email: this.state.email,
      mobile_munber: this.state.mobilenumber,
      city: this.state.city,
      district: this.state.district,
    };
    if (!invalid) {
      this.props.onRegistration(payload);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.response !== nextProps.response &&
      nextProps.response !== ""
    ) {
      if (nextProps.response.status && nextProps.response.status.toLowerCase() == "success") {
        this.props.navigation.navigate("Login");
      } else {
        alert(nextProps.response.errors[Object.keys(nextProps.response.errors)[0]].join(', '));
      }
    }
    if (this.props.error !== nextProps.error && nextProps.error !== "") {
      alert("Unable to registration.");
    }
  }

  render() {
    const {
      firstname,
      lastname,
      username,
      password,
      nic,
      email,
      mobilenumber,
      city,
      district,
    } = this.state;
    return (
      <Container style={styles.loginWrap}>
        <Loader loading={this.props.disable} />
        <Content disableKBDismissScroll={true}>
          <View style={styles.loginInnerWrap}>
            {/* logo */}
            <View style={styles.logoArea}>
              <Image
                source={require("../../assests/logo1.png")}
                style={{ height: 200, width: 200 }}
              />
            </View>

            {/* form */}
            <View style={styles.formArea}>
              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="First Name"
                  value={firstname}
                  onChangeText={(text) => this.handleChange(text, "firstname")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="Last Name"
                  value={lastname}
                  onChangeText={(text) => this.handleChange(text, "lastname")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="Nic"
                  value={nic}
                  onChangeText={(text) => this.handleChange(text, "nic")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => this.handleChange(text, "email")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="User Name"
                  value={username}
                  onChangeText={(text) => this.handleChange(text, "username")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="lock" style={styles.inputIcon} />
                <Input
                  secureTextEntry={true}
                  maxLength={20}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => this.handleChange(text, "password")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="District"
                  value={district}
                  onChangeText={(text) => this.handleChange(text, "district")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="City"
                  value={city}
                  onChangeText={(text) => this.handleChange(text, "city")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="Mobile Number"
                  value={mobilenumber}
                  onChangeText={(text) =>
                    this.handleChange(text, "mobilenumber")
                  }
                />
              </Item>

              <Button
                style={styles.loginBtnWrap}
                onPress={this.handleSubmit.bind(this)}
                primary={true}
                disabled={this.props.disable}
                block
              >
                <Text style={styles.loginBtnTxt}>Register</Text>
              </Button>

              <View style={styles.loginFooterWrap}>
                <Text style={styles.dontHaveAccntTxt}>
                  Already have an account?
                </Text>
                <Text
                  style={[styles.dontHaveAccntTxt, styles.signupTxt]}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  {" "}
                  Login
                </Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response: state.reg.data,
    disable: state.reg.disable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegistration: (payload) => dispatch(registration(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
