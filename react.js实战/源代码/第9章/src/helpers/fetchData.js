export default () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            title: '标题',
            content: '内容',
            url: 'https://www.baidu.com'
        }), 500);
    })
};
