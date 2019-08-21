var APP_DATA = {
  "scenes": [
    {
      "id": "0-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0582184971887028,
          "pitch": 0.3134437810587105,
          "rotation": 7.0685834705770345,
          "target": "3-loft"
        },
        {
          "yaw": 2.325809608495833,
          "pitch": 0.4150801087366851,
          "rotation": 0,
          "target": "5-upstairs-hall"
        },
        {
          "yaw": 0.2643073562718392,
          "pitch": 0.49456545506247807,
          "rotation": 0,
          "target": "9-bedroom-1"
        },
        {
          "yaw": -2.330932030307709,
          "pitch": 0.6828958380076458,
          "rotation": 0.7853981633974483,
          "target": "12-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-mudroom",
      "name": "Mudroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6357937553500772,
          "pitch": 0.41259385478773325,
          "rotation": 0.7853981633974483,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.856639957141658,
          "pitch": 0.39875403362413486,
          "rotation": 0,
          "target": "10-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16261566148893003,
          "pitch": 0.26874833294806777,
          "rotation": 0,
          "target": "3-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-loft",
      "name": "Loft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.40686395799441755,
          "pitch": 0.29136157382183114,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": -2.453669411716117,
          "pitch": 0.36238913169481357,
          "rotation": 0,
          "target": "0-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.046348593709615,
          "pitch": 0.2313407362583284,
          "rotation": 4.71238898038469,
          "target": "12-foyer"
        },
        {
          "yaw": -1.7320885754945703,
          "pitch": 0.19802754670329392,
          "rotation": 0,
          "target": "1-mudroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-upstairs-hall",
      "name": "Upstairs Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6032438220975713,
          "pitch": 0.4689649895508765,
          "rotation": 0,
          "target": "0-stairs"
        },
        {
          "yaw": 1.5123921243374179,
          "pitch": 0.4442513255810425,
          "rotation": 0.7853981633974483,
          "target": "8-bedroom-2"
        },
        {
          "yaw": -0.3174526274471958,
          "pitch": 0.45287437622780935,
          "rotation": 0,
          "target": "7-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6517404009082792,
          "pitch": 0.39905892018942524,
          "rotation": 0,
          "target": "12-foyer"
        },
        {
          "yaw": 2.477156144745237,
          "pitch": 0.23037814312732863,
          "rotation": 5.497787143782138,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11962011823862717,
          "pitch": 0.36392325868960285,
          "rotation": 5.497787143782138,
          "target": "5-upstairs-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.626797737377709,
          "pitch": 0.3543186974490027,
          "rotation": 0.7853981633974483,
          "target": "5-upstairs-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3918227373536336,
          "pitch": 0.2533900376315721,
          "rotation": 0.7853981633974483,
          "target": "0-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3559391546208559,
          "pitch": 0.20893406375997792,
          "rotation": 0,
          "target": "1-mudroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-study",
      "name": "Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1279363695040843,
          "pitch": 0.42493778804973914,
          "rotation": 0,
          "target": "12-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2656778972480218,
        "pitch": -0.058026564602077,
        "fov": 1.566717244256129
      },
      "linkHotspots": [
        {
          "yaw": 2.2311654507909013,
          "pitch": 0.10049276813628083,
          "rotation": 11.780972450961727,
          "target": "0-stairs"
        },
        {
          "yaw": -0.8691922642597518,
          "pitch": 0.4558798308026599,
          "rotation": 0,
          "target": "11-study"
        },
        {
          "yaw": -2.4840276971855246,
          "pitch": 0.3538248963961763,
          "rotation": 0.7853981633974483,
          "target": "6-dining-room"
        },
        {
          "yaw": 2.8233003500219134,
          "pitch": 0.20235042886943333,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
