# Rework playgroud

A simple plugin that rewrite all fonts to `sans-serif`.
More information about in source code comment.

**Whit rework-visit**
```js
[
  {
    type:'declaration',
    property:'font-family',
    value:'serif',
    position:Position    {
      start:[
        Object
      ],
      end:[
        Object
      ],
      source:undefined
    }
  }
][
  {
    type:'declaration',
    property:'font-family',
    value:'serif',
    position:Position    {
      start:[
        Object
      ],
      end:[
        Object
      ],
      source:undefined
    }
  }
][
  {
    type:'declaration',
    property:'font-family',
    value:'serif',
    position:Position    {
      start:[
        Object
      ],
      end:[
        Object
      ],
      source:undefined
    }
  }
]
```
**Without rework-visit**
```js
{
  rules:[
    {
      type:'rule',
      selectors:[
        Object
      ],
      declarations:[
        Object
      ],
      position:[
        Object
      ]
    },
    {
      type:'media',
      media:'(min-width: 200px)',
      rules:[
        Object
      ],
      position:[
        Object
      ]
    },
    {
      type:'keyframes',
      name:'teste',
      vendor:undefined,
      keyframes:[
        Object
      ],
      position:[
        Object
      ]
    }
  ],
  parsingErrors:[
  ]
}
```
