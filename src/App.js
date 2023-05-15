import logo from './logo.svg';
import './App.css';
import React from 'react'
import GreetComponent from './components/Greet'; //If you export a component as default you can import it with any name
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBounary from './components/ErrorBounary';
import ClickCounter from './components/ClickCounter';
import Parent from './components/LiftingState.js/Parent';
import HookCounter from './fncomponents/HookCounter';
import HookCounter3 from './fncomponents/HookCounter3';
import HookCounter4 from './fncomponents/HookCounter4';
import HookCounterOne from './fncomponents/HookCounterOne';
import HookMouse from './fncomponents/HookMouse';
import MouseContainer from './fncomponents/MouseContainer';
import IntervalHookCounter from './fncomponents/IntervalHookCounter';
import FetchData from './fncomponents/FetchData';
import FetchOnePost from './fncomponents/FetchOnePost';
import ComponentC from './fncomponents/ComponentC';
//this is responsible for our view in the browser
//App is a root component

//creating Context
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <p>I am Iron Man</p>
      {/* <UserContext.Provider value={'Ashok'}>
        <ChannelContext.Provider value={'ashok youtube'}>
        <ComponentC />
        </ChannelContext.Provider>
        
      </UserContext.Provider> */}
      {/* Functional Components */}
      {/* <FetchOnePost /> */}
      {/* <FetchData /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter3></HookCounter3> */}
      {/* <HookCounter></HookCounter> */}



      {/* class Componenets */}
      {/* <Parent></Parent> */}
      {/* <ClickCounter></ClickCounter> */}
      
      {/* <ErrorBounary>
      <Hero heroName="BatMan"></Hero>
      </ErrorBounary>
      <ErrorBounary>
      <Hero heroName="IronMan"></Hero>
      </ErrorBounary>
      <ErrorBounary>
        <Hero heroName="jocker"></Hero>
      </ErrorBounary> */}
      
      {/* <Hero heroName="batman"></Hero>
      <Hero heroName="jocker"></Hero> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <PureComp></PureComp> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <Form></Form> */}
      {/* <Inline></Inline> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Message></Message>
        <GreetComponent name='Ashok' heroName='Iron Man'> 
       <p>This is children props</p>
       </GreetComponent> 
       <GreetComponent name='Dinesh' heroName='Hulk'>
        <button>Action</button>
       </GreetComponent> 
       <GreetComponent name='Dattu' heroName='Spider Man'> </GreetComponent>  */}
       <Welcome name='java'></Welcome>
       <Welcome name='python'></Welcome>
       <Hello></Hello>
    </div>
  );
}

export default App;
