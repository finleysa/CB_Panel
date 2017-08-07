import { Breaker } from './breaker';

export class Breakers
{
  static getBreakers() {
    const breakers: Array<Breaker> = [
      {
        name: "SERVER",
        amps: 30,
        address: '0x20',
        register: '0x12',
        relay: '0x01'
      },
      {
        name: "FLIR",
        amps: 25,
        address: '0x20',
        register: '0x12',
        relay: '0x02'
      },
      {
        name: "ETH SW",
        amps: 30,
        address: '0x20',
        register: '0x12',
        relay: '0x04'
      },
      {
        name: "DIG MUX",
        amps: 2,
        address: '0x20',
        register: '0x12',
        relay: '0x08'
      },
      {
        name: "ANA MUX",
        amps: 2,
        address: '0x20',
        register: '0x12',
        relay: '0x10'
      },
      {
        name: "MCN#1",
        amps: 3,
        address: '0x20',
        register: '0x12',
        relay: '0x20'
      },
      {
        name: "MCN#2",
        amps: 3,
        address: '0x20',
        register: '0x12',
        relay: '0x40'
      },
      {
        name: "MCN#3",
        amps: 3,
        address: '0x20',
        register: '0x12',
        relay: '0x80'
      },
      {
        name: "MCN#4",
        amps: 3,
        address: '0x20',
        register: '0x13',
        relay: '0x01'
      },
      {
        name: "12V BUS",
        amps: 10,
        address: '0x20',
        register: '0x13',
        relay: '0x02'
      },
      {
        name: "USB HUB",
        amps: 15,
        address: '0x20',
        register: '0x13',
        relay: '0x04'
      },
      {
        name: "SERIAL",
        amps: 1,
        address: '0x20',
        register: '0x13',
        relay: '0x08'
      },
      {
        name: "LTING",
        amps: 1,
        address: '0x20',
        register: '0x13',
        relay: '0x10'
      },
      {
        name: "ENCODER",
        amps: 2,
        address: '0x20',
        register: '0x13',
        relay: '0x20'
      },
      {
        name: "DVR",
        amps: 3,
        address: '0x20',
        register: '0x13',
        relay: '0x40'
      },
      {
        name: "AUDIO",
        amps: 2,
        address: '0x20',
        register: '0x13',
        relay: '0x80'
      },
      {
        name: "ISOCALL",
        amps: 3,
        address: '0x21',
        register: '0x12',
        relay: '0x01'
      },
      {
        name: "PRC 117",
        amps: 1,
        address: '0x21',
        register: '0x12',
        relay: '0x02'
      },
      {
        name: "EQENABLE",
        amps: 1,
        address: '0x21',
        register: '0x12',
        relay: '0x04'
      },
      {
        name: "FAN",
        amps: 1,
        address: '0x21',
        register: '0x12',
        relay: '0x08'
      }
    ];

    return breakers;
  }
}
