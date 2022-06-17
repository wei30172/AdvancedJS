// https://www.youtube.com/watch?v=4lqJBBEpjRE&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=16

// forEach is BAD! for Async Await Code
const ids = [1,2,3,4,5,6,7,8,9,10];

const initApp = async () => {
  // useForEach(ids);
  // getPostsSerialized(ids);
  // getPostsCurrently(ids);
  getPostsSerializedUsingReduce(ids);
}

document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
  return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}

const useForEach = async (ids) => {
  ids.forEach(id => console.log(id)); // 1, 2, ... 10
  await ids.forEach(async (id) => {
    const data = await getPost(id);
    console.log(data);
  }); // await is not working (we didn't await for anything to resolve), and the order is not serialized.
  console.log("I'm not waiting") // got log at the top
}

const getPostsSerialized = async (ids) => {
  for (const id of ids) {
    const data = await getPost(id);
    console.log(data);
  }; // the order is serialized.
  console.log("I'm not waiting") // got log at the bottom
}

const getPostsCurrently = (ids) => {
  // const posts = Promise.all(ids.map(id => getPost(id))) // the order is serialized.
  const posts = Promise.allSettled(ids.map(id => getPost(id))) // the order is serialized. (status: "fulfilled")
  console.log(posts);
  console.log("I'm not waiting") // got log at the bottom
}

const getPostsSerializedUsingReduce = async (ids) => {
  await ids.reduce(async(acc, id) => { // reduce has an auucumulater
    
    // wait for the previous item to complete
    await acc; // if not: not serialized

    // get the next item
    const post = await getPost(id); // the order is serialized.

    console.log(post)
    console.log("I'm not waiting") // got log at the bottom
  }, Promise.resolve()) // if not: no number 1 (We need the iinitial value to get our first value back.)
}
