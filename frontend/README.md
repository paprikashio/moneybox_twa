

# Moneybox React components

A collection of components for building native interfaces for iOS, Android and Desktop Telegram mini app.

## Components

### Action link

Test link with click function

```javascript  
import ActionLink from '../ActionLink/ActionLink'  
  
function App() {  
 return <Action      title={"title"}   
      onClick={() => {}}   
      destructive={true}  
 />
 }  
```  

| Prop    | Type     | Description                 |  
|:--------|:---------|:----------------------------|  
| `title` | `string` | **Required**. Link text     |  
| `onClick` | `func`   | **Required**. OnClick event |  
| `destructive` | `bool`   | Add destructive style       |  

### Avatar

Avatar component for image or free children

```javascript  
import Avatar from '../Avatar/Avatar'  
  
function App() {  
 return <Avatar        src={"https://example.com/image.png"}   
        color="#ffffff"   
        onClick={() => {}}  
 > JI </Avatar>
}  
```  

| Prop    | Type     | Description                      |  
|:--------|:---------|:---------------------------------|  
| `src`   | `string` | Source image                     |  
| `color` | `string` | Background color for placeholder |  
| `onClick`  | `func`   | OnClick event          |  

### Badge

Badge, status indicator

```javascript  
import Badge from '../Badge/Badge'  
  
function App() {  
 return <Badge text={"Pending"}/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `mode`    | `primary`, `success`, `destructive` | Color mode    |  
| `text`    | `string`               | Text          |  


### BottomSheet

Modal bottom sheet component

```javascript  
import BottomSheet from '../BottomSheet/BottomSheet';
import {Fragment, useState} from "react";
  
const App = () => {  
 const [visible, setVisible] = useState(false);

 return <Fragment>
	 <button onClick={() => setVisible(true)}></button>
	 <BottomSheet title={"Name"} onClose={() => setVisible(false)}>
		content here
	 </BottomSheet>
</Fragment>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `isVisible`    | `bool` | Visible status    |  
| `onClose`    | `func`               | **Required**. Close modal event          |  
| `title`    | `string` | Header title    |  

### Button

Primary button

```javascript  
import Button from '../Button/Button';
  
const App = () => {  
 return <Button before={<div/>} onClick={() => {}}>Press me</Button>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `before`    | `node` | Content before label (for icon)   |  
| `onClick`    | `func`               | **Required**. OnClick event          |   

### Cell

Component of cell in list

```javascript  
import Cell from '../Cell/Cell';
import Text from "../Typography/Text/Text";
import Subtitle from "../Typography/Subtitle/Subtitle";
import Avatar from "../Avatar/Avatar";
import {Fragment} from "react";
  
const App = () => {  
 return <Fragment>
	<Cell  
	  before={<Avatar color={"#000000"}>UI</Avatar>}  
	  title={<Text mode={"destructive"}>John Doe</Text>}  
	  subtitle={<Subtitle mode={"secondary"}></Subtitle>}  
	  onClick={() => {}}  
	/>
  </Fragment>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `before`    | `node` | Start content area (for example, avatar)   |  
| `after`    | `node` | End content area   |  
| `title`    | `node`  | **Required**. Title area |   
| `subtitle`    | `node`  | Subtitle area | 
| `onClick`    | `func`  | **Required**. OnClick event          |     

### ConfigProvider

A wrapper for an application that interacts with TWA SDK library.
This component must be used at the top level of the application, for example in index.js or App.js

```javascript  
import ConfigProvider from '../ConfigProvider/ConfigProvider';
  
const Main = () => {  
 return <ConfigProvider>  
	 <App />
 </ConfigProvider>
 }  
```

| Value      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `platform`    | `string` | Platform  app launch  |  
| `theme`    | `cupertino` or `material` | Design style  |  
| `colorScheme` | `light` or `dark` | Color scheme  |  
| `themeParams` | `object` | Telegram ThemeParams  |  
| `user` | `object` | User Telegram init data  |  
| `webAppInstance` | `object` | WebApp instance from TWA SDK  |  

### Container

Block for rendering content with heading

```javascript  
import Container from '../Container/Container';
  
const Main = () => {  
 return <Container mode={"primary"} title={"Title"} rounded={true}>
	 content here
 </Container>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `mode`    | `primary`, `secondary` | Background theme |  
| `rounded`    | `bool` | Add border radius in Cupertino theme   |  
| `title`    | `string`  | Title |   
| `forwardRef`    | `ref`  | Ref | 

### DateName

Returns date formatting string from UNIX timestamp

```javascript  
import DateName from '../DateName/DateName';
  
const Main = () => {  
 return <DateName date={1696857785}/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `date`    | `number` | **Required** UNIX time |  
| `needTime`    | `bool` | Do need to return the time along with date  | 

### DatePicker

Wrapper around react-day-picker component.

```javascript  
import DatePicker from '../DatePicker/DatePicker';
import { useState } from "react";
  
const Main = () => {  
 
 const [date, setDate] = useState(new Date())

 return <DatePicker value={date} onChange={(value) => setDate(value)}/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `value`    | `Date` | Date object |  
| `onChange`    | `func` | Change date event  | 

### Delimiter

Vertical stripe to separate blocks

```javascript  
import Delimiter from '../Delimiter/Delimiter';
  
const Main = () => {  
 return <Delimiter height={10}/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `height`    | `Number` | Height |  

### DismissButton

Close button. Used to close the modal window.

```javascript  
import DismissButton from '../DismissButton/DismissButton';
  
const Main = () => {  
 return <DismissButton onClick{() => {}}/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `onClick`    | `func` | Click event |  

### Div

Container that adds safe padding

```javascript  
import Div from '../Div/Div';
  
const Main = () => {  
 return <Div top={12}>Content here</Div>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `left`    | `number` |  Padding left |  
| `right`    | `number` |  Padding right |  
| `top`    | `number` |  Padding top |  
| `bottom`    | `number` |  Padding bottom |  
| `className`    | `string` | Additional css class |  
| `forwardRef`    | `ref` | Ref |  

### Fab

A floating action button (FAB).

```javascript  
import Fab from '../Fab/Fab';
  
const Main = () => {  
 return <Fab onClick={() => {}}>+</Fab>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `onClick`    | `func` |  Click event |

### Input

Add-on to input

```javascript  
import Input from '../Form/Input/Input';
import { useState } from "react";
  
const Main = () => {  

 const [value, setValue] = useState("test")

 return <Input  
		type={"number"}  
	    autoFocus={true}  
	    placeholder={"100"}  
	    value={value}  
	    after={<div/>}  
	    onChange={(e) => setValue(e.target.value)}  
	/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `onChange`    | `func` |  Change event |
| `label`    | `string` |  Label |
| `hint`    | `string` |  Hint text |
| `placeholder`    | `string` |  Placeholder |
| `value`    | `string`, `number` |  Value |
| `autoFocus`    | `bool` |  Autofocus |
| `type`    | `text`, `number` |  Type input |
| `after`    | `node` |  Adds an icon to the right |

### Textarea

Add-on to textarea

 ```javascript  
import Textarea from '../Form/Textarea/Textarea';
import { useState } from "react";
  
const Main = () => {  

 const [value, setValue] = useState("test")

 return <Textarea  
		type={"number"}  
	    placeholder={"100"}  
	    value={value}  
	    after={<div/>}  
	    onChange={(e) => setValue(e.target.value)}  
	/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `onChange`    | `func` |  Change event |
| `label`    | `string` |  Label |
| `rows`    | `number` |  Rows |
| `placeholder`    | `string` |  Placeholder |
| `value`    | `string`, `number` |  Value |
| `type`    | `text`, `number` |  Type input |
| `after`    | `node` |  Adds an icon to the right |

### Header

Header title for cells list

```javascript  
import Header from '../Header/Header';
  
const Main = () => {  
 return <Header title={"Title"} action={<div/>}/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `title`    | `string` |  **Required**. Title |
| `action`    | `node` |  Action button area opposite title |

### IconButton

Button with an icon inside

```javascript  
import IconButton from '../IconButton/IconButton';
  
const Main = () => {  
 return <IconButton onClick={() => {}}>+</IconButton>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `onClick`    | `func` |  **Required**. Click event |

### List

Cell wrapper component. As children you must pass on Cell component.

```javascript  
import List from '../List/List';
import Cell from '../Cell/Cell';
  
const Main = () => {  
 return <List>
		<Cell/>
		<Cell/>
	</List>
 }  
```

### Loader

Loading indicator

```javascript  
import Loader from '../Loader/Loader';
  
const Main = () => {  
 return <Loader />
 }  
```

### Page

Screen rendering component. Controls the background fill of the page and header.

```javascript  
import Page from '../Page/Page';
  
const Main = () => {  
 return <Page header={"primary"} body={"secondary"}>Content here</Page>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `header`    | `primary`, `secondary` |  Telegram header background |
| `body`    | `primary`, `secondary` |  Page background |
| `isBack`    | `bool` |  Displays back button. When clicked, the window.history.back() event occurs|

### Placeholder

Empty State Component

```javascript  
import Placeholder from '../Placeholder/Placeholder';
  
const Main = () => {  
 return <Placeholder  
    title={"Error"}  
    description={"Description error"}  
    animation={"clock"}  
  />
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `top`    | `number` |  Padding top value |
| `title`    | `string` |  **Required**. Title |
| `description`    | `string` | **Required**. Description |
| `animation`    | `egg`, `diamond`, `clock`, `success` |  Animation view |

### Ripple

```javascript  
import Ripple from '../Ripple/Ripple';
  
const Main = () => {  
 return <div style={{ width: 100, height: 100 }}><Ripple/></div>
 }  
```

Click Animation Component for material theme

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `borderRadius`    | `number` |  Custom border radius |

### Separator

Block Separator Line Component

```javascript  
import Separator from '../Separator/Separator';
  
const Main = () => {  
 return 
	 <div>foo</div>
	 <Separator/>
	 <div>bar</div>
 }  
```

### Spacing

Creates indentation between elements

```javascript  
import Spacing from '../Spacing/Spacing';
  
const Main = () => {  
 return 
	 <div>foo</div>
	 <Spacing size={24} mode={""}/>
	 <div>bar</div>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `size`    | `number` |  Size indentation |
| `mode`    | `horizontal`, `vertical` |  direction |

### Tabs

Tab Switcher Component

```javascript  
import Tabs from '../Tabs/Tabs';
import {useState } from "react";
  
const Main = () => {  

const [active, setActive] = useState(0)
 
 return 
	 <Tabs onChange={setActive} list={["Foo", "Bar"]}/>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `onChange`    | `fun` |  Change active tab event |
| `list`    | `array[string]` |  List of tab names |

### Typography

Collection of text components: Headline, Title, Text, Supertitle, Subtitle.

```javascript  
import Headline from "../Typography/Headline/Headline";
import Title from "../Typography/Title/Title";
import Text from "../Typography/Text/Text";
import Subtitle from "../Typography/Subtitle/Subtitle";
import SuperTitle from "../Typography/SuperTitle/SuperTitle";
  
const Main = () => {  
 
 return 
	 <div>
		<Headline mode={"primary"} weight={"regular"}>Test</Headline>
		<Title mode={"primary"} weight={"regular"}>Test</Title>
		<Text mode={"primary"} weight={"regular"}>Test</Text>
		<Subtitle mode={"primary"} weight={"regular"}>Test</Subtitle>
		<SuperTitle mode={"primary"} weight={"regular"}>Test</SuperTitle>
	 </div>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `mode`    | `primary`, `secondary`, `success`, `destructive` |  Text color |
| `weight`    | `regular`, `medium`, `bold` |  List of tab names |


## Hooks

### useColorTheme()

Returns the current paint scheme: `light` or `dark`

```javascript  
import useColorTheme from "../hooks/useColorTheme";
  
const Main = () => {  

 const colorTheme = useColorTheme();
 
 return <div>theme: { colorTheme }</div>
 }  
```

### useDate(date, needTime)

Returns a formatted date.

```javascript  
import useColorTheme from "../hooks/useDate";
  
const Main = () => {  

 const date = useDate(1696857785, true);
 
 return <div>date: { colorTheme }</div>
 }  
```

| Prop      | Type                   | Description   |  
|:----------|:-----------------------|:--------------|  
| `date`    | `number` | **Required** UNIX time |  
| `needTime`    | `bool` | Do need to return the time along with date  | 

### useTheme()

Return design theme: `material` or `cupertino`.

```javascript  
import useTheme from "../hooks/useTheme";
  
const Main = () => {  

 const theme = useTheme();
 
 return <div>theme: { theme }</div>
 }  
```
### useThemeParams()

Return Telegram theme params

```javascript  
import useThemeParams from "../useThemeParams/useThemeParams";
  
const Main = () => {  

 const { bgColor, textColor, hintColor, linkColor, buttonColor, buttonTextColor, secondaryBgColor } = useThemeParams();
 
 return <div>background color: { bgColor }</div>
 }  
```
### useTonClient()

Return TON client instance

```javascript  
import useTonClient from "../useTonClient/useTonClient";
import { useEffect } from "react";
  
const Main = () => {  

 const client = useTonClient();

 useEffect(() => {  
    if (!client) {  
        return;  
    }
	const fetchSafeContract = async () => {
	    const openMintContract = client.open("address");
    }
	fetchSafeContract();
}, [client]);

 }  
```
### useUser()

Return Telegram user profile

```javascript  
import useUser from "../useUser/useUser";
  
const Main = () => {  

 const { id, firstName, lastName, languageCode, allowsWriteToPm } = useUser();
 
 return <div>User name: { firstName } { lastName }</div>
 }  
```
### usePopup()

Open Telegram alert popup.

```javascript  
import usePopup from "../openPopup/usePopup";
  
const Main = () => {  

 const popup = usePopup();

 const openPopup = () => {
	 popup({  
	    title: "Title",  
	    message: "Message",
	    buttons: [
		    {
				id: "foo",  
                type: "default",  
                text: "Close"
			},
			{
				id: "bar",  
                type: "destructive",  
                text: "Delete"
			}
		]
	 }).then((buttonId) => {  
        console.log(buttonId);  
     }).catch((e) => {  
        console.log(e)
     });
 } 
 
 return <button>Open popup</button>
 }  
```

### useStorage()

Hooks for work with Telegram Cloud Storage

```javascript  
import useStorage from "../useStorage/useStorage";

const Main = () => {

    const { getKeyIndex, getKeys, getItem, getItems, setItem, removeItem, removeItems } = useStorage();

    // return free number key for use to save item
    const getIndex = () => {
        getKeyIndex().then(index => {
            console.log(index);
        })
    }

    // return all keys
    const getStorageKeys = () => {
        getKeys().then(keys => {
            console.log(keys);
        })
    }

    // return value by key
    const getStorageItem = () => {
        getItem("key").then(value => {
            console.log(value);
        })
    }

    // return list values from list keys
    const getStorageItems = () => {
        getItems(["key_1", "key_2"]).then(values => {
            console.log(values);
        })
    }

    // save value
    const setStorageItem = () => {
        setItem("key", "value").then(() => {
            console.log("success");
        })
    }

    // remove value
    const removeStorageItem = () => {
        removeItem("key").then(() => {
            console.log("success");
        })
    }

    // remove list items
    const removeStorageItems = () => {
        removeItems(["key_1", "key_2"]).then(() => {
            console.log("success");
        })
    }

}  
```