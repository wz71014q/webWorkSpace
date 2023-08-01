import './index.html';
import './style.css';

const content = document.querySelector('.content');

let observer1 = new IntersectionObserver(([change]) => {
  console.log(change.isVisible) // 被覆盖就是false，反之true
}, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: [0, 1],
  delay: 1000,
  trackVisibility: true,
});

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    console.log('viewPortHeight', viewPortHeight);
    console.log('entry', entry);
    // if (entry.intersectionRatio <= 0) {
    //   console.log(entry.target, '内容不可见')
    // }
  });
}, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: [0, 1]
});

observer.observe(content);

function isElementCovered(target) {
  const content = document.querySelector('.scroll-wrapper');
  content.addEventListener('scroll', (event) => {
    const rect=target.getBoundingClientRect();
    const x=rect.left;
    const y=rect.top;
    const topElt=document.elementFromPoint(x,y);
    if(target.isSameNode(topElt) || target.contains(topElt)) {
      console.log('no overlapping');
    }
  })
}

// console.log('isElementCovered', isElementCovered(content));
isElementCovered(content);
