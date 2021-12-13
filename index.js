import Alert from './customAlert.js';

window.addEventListener('load', global => {
  const url = new URL(location.href);
  const queryUrl = url.searchParams.get('url');
  const regexp = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
        
  if(navigator.userAgent.match(regexp))
  if(queryUrl) {
    const view = document.createElement('iframe');

    view.setAttribute('class', 'view');
    view.setAttribute('width', screen.width);
    view.setAttribute('height', screen.height);
    view.setAttribute('src', queryUrl);
    view.addEventListener('load', () => new Alert({
      title: '欢迎访问白珩导航页',
      content: '日常分享优秀资源哦! 哦尼酱',
      close: '关闭'
    }));

    document.body.appendChild(view);
  } else 
  document.write('Not Found Url Tag');
  else
  location.href = queryUrl;
})
