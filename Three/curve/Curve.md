# 曲线  

## 构造器  

> s

# path

## 构造器：

> 1、Path( points : Array )  
> points是二维点的数组，第一个点作为起点，然后将连续点作为线添加到曲线数组中。如果没有点，画了一个空路径，那么将原点作为currentPoint  

## 属性
> 1、currentPoint  
> 当前路径的起点

## 方法

 ```js
 1、圆  
 .absarc ( x : Float, y : Float, radius : Float, startAngle : Float, endAngle : Float, clockwise : Float )  
 x, y: 圆心位置  
 clockwise ：是否顺时针方向画圆，默认是false  

 2、椭圆：  
 .absellipse ( x : Float, y : Float, xRadius : Float, yRadius : Float, startAngle : Float, endAngle : Float, clockwise : Float, rotation : Float )  

rotation: 椭圆的旋转角，从x正轴方向逆时针旋转，默认是0。如果现在有一段从x轴方向逆时针画30度的圆弧，rotation设为2/3PI, 则该段弧是从x轴正方形逆时针60度开始，画到逆时针90度结束。  

3、圆：  
.arc ( x : Float, y : Float, radius : Float, startAngle : Float, endAngle : Float, clockwise : Float )

4、椭圆  
.ellipse ( x : Float, y : Float, xRadius : Float, yRadius : Float, startAngle : Float, endAngle : Float, clockwise : Float, rotation : Float )  

5、贝塞尔曲线  
.bezierCurveTo ( cp1X : Float, cp1Y : Float, cp2X : Float, cp2Y : Float, x : Float, y : Float )  
创建一段从currentPoint(如果没有设置就是原点)开始的贝塞尔曲线，以(cp1X, cp1Y)和(cp2X, cp2Y)作为控制点，(x, y)为终点。  

6、原点位置  
.moveTo(x, y)  
将原点设置为(x, y)

7、.lineTo(x, y)  
从原点到(x, y)连一条线。

8、.setFromPoints ( vector2s : Array )
points -- 二维点的数组。
这个方法将二维点的数组以直线连接起来，形成折线。  
.splineThru ( points : Array )  
这个方法将二维点的数组以曲线连接起来，形成一条平滑曲线。
9、二次方曲线  
.quadraticCurveTo ( cpX : Float, cpY : Float, x : Float, y : Float )  
以(cpX, cpY)为控制点, 起点为currentPoint, 终点为(x, y)  
