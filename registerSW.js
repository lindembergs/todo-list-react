if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/todo-list-react/sw.js', { scope: '/todo-list-react/' })})}