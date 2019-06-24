//
//  Bulb.swift
//  LightApp
//
//  Created by Shawn on 6/23/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Bulb)

class Bulb: NSObject {
  @objc
  
  static var isOn = false
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func turnOn() {
    Bulb.isOn = true
    print("Bulb is now on")
  }
  
  @objc
  func turnOff() {
    Bulb.isOn = false
    print("Bulb is now Off")
  }
  
  @objc
  
  func getStatus(_ callback: RCTResponseSenderBlock) {
    callback([NSNull(), Bulb.isOn])
  }
  
  
}
