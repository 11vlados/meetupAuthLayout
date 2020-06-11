import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  CheckBox,
  ImageBackground
} from "react-native";
import style from "../style";
import { IconEye } from "../Components/IconEye";
import { FormField } from "../Components/FormField";
import { FormPasswordField } from "../Components/FormPasswordField"

export function SignUpForm() {
  const [fullName, onChangeFullName] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [pin, onChangePin] = useState("");
  const [pinRepeat, onChangePinRepeat] = useState("");
  const [isCheckBoxSelected, setCheckBoxSelection] = useState(false);
  const [hidePin, onChangeHidePin] = useState(true);
  const [hidePinRepeat, onChangeHidePinRepeat] = useState(true);

  const managePinVisibility = () => {
    hidePin ? onChangeHidePin(false) : onChangeHidePin(true);
  };
  const manageRepeatPinVisible = () => {
    hidePinRepeat ? onChangeHidePinRepeat(false) : onChangeHidePinRepeat(true);
  };

  return (
    <View style={style.signUpForm}>
      <FormField
        label="Full Names"
        value={fullName}
        onChange={text => onChangeFullName(text)}
      />

      <FormField
        label="Phone Number"
        value={phoneNumber}
        onChange={text => onChangePhoneNumber(text)}
      />

      <FormPasswordField
        label="Pin"
        value={pin}
        onChange={text => onChangePin(text)}
        secureTextEntry={hidePin}
      />

      <TouchableOpacity
        style={{
          ...style.visibilityHidePinLogin,
          ...style.visibilityHidePinRegister
        }}
        onPress={managePinVisibility}
      >
        <IconEye hidePin={hidePin} />
      </TouchableOpacity>

      <FormPasswordField
        label="Repeat Pin"
        value={pinRepeat}
        onChange={text => onChangePinRepeat(text)}
        secureTextEntry={hidePinRepeat}
      />
      <TouchableOpacity
        onPress={manageRepeatPinVisible}
        style={{
          ...style.visibilityHidePinLogin,
          ...style.visibilityHidePinRepeatRegister
        }}
      >
        <IconEye hidePin={hidePinRepeat} />
      </TouchableOpacity>

      <View style={style.checkboxContainer}>
        <CheckBox
          value={isCheckBoxSelected}
          onValueChange={setCheckBoxSelection}
          style={style.checkbox}
        />
        <Text style={{ ...style.basetext, ...style.checkboxText }}>
          I agree to the terms & conditions
        </Text>
      </View>

      <TouchableOpacity>
        <ImageBackground
          source={require("../assets/Rectangle.png")}
          style={{ ...style.gradientButton, ...style.authButton }}
        >
          <Text style={style.gradientButtonText}>Register</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
