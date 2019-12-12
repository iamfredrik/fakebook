import React from 'react';
import {mount} from 'react-mounter';

publicRoutes = FlowRouter.group({
  name: 'publicroutes'
});
privateRoutes = FlowRouter.group({
  name: 'privateroutes',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      return FlowRouter.go('/');
    }
  }]
});
publicRoutes.route('/',{
  name:'Home',
  action:function(){
    mount(Homelayout,{})
  }
});
privateRoutes.route('/dashboard',{
  name:'Dashboard',
  action:function(){
    mount(Layout,{
      sidebar:<Sidebar/>,
      content:<Main/>
    })
  }
});
publicRoutes.route('/signout',{
  name:'Signout',
  action:function(){
    Meteor.logout(function(){
      FlowRouter.go('');
    })
  }
});
privateRoutes.route('/profiles',{
  name:'Profie',
  action:function(){
    ReactLayout.render(Layout,{
      siderbar:<Sidebar/>,
      content:<Profile/>
    })
  }
});