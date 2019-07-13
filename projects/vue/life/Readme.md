vue 父子组件执行顺序：
father beforeCreate
father created
father beforeMount

child beforeCreate
child created
child beforeMount
child mounted

father mounted

father beforeDestroy

child beforeDestroy
child destroyed

father destroyed