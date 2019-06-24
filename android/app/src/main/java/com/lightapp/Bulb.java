package com.lightapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class Bulb extends ReactContextBaseJavaModule {
    private static boolean isOn = false;

    public Bulb(ReactApplicationContext reactContext) {
        super(reactContext);

    }

    @ReactMethod
    public void getStatus (Callback successCallback) {
        successCallback.invoke(null, isOn);
    }

    @ReactMethod
    public void turnOn() {
        isOn = true;
        System.out.println("Bulb is turn On");
    }

    @ReactMethod
    public void turnOff() {
        isOn = false;
        System.out.println("Bulb is turned Off");
    }

    @Override
    public String getName() {
        return "Bulb";
    }



}
