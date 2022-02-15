import axios from 'axios';
import { useEffect,useState } from 'react';

  export default function  JokeData()  {

    const [chuckjoke1, setChuckJoke1] =  useState({
        joke: '',
      });
      const [jokecat1, setJokecat1] =  useState({
        category:''
      });
      const [chuckjoke2, setChuckJoke2] =  useState({
        joke: '',
      });
      const [jokecat2, setJokecat2] =  useState({
        category:''
      });
      const [chuckjoke3, setChuckJoke3] =  useState({
        joke: '',
      });
      const [jokecat3, setJokecat3] =  useState({
        category:''
      });
      const [chuckjoke4, setChuckJoke4] =  useState({
        joke: '',
      });
      const [jokecat4, setJokecat4] =  useState({
        category:''
      });
      const [chuckjoke5, setChuckJoke5] =  useState({
        joke: '',
      });
      const [jokecat5, setJokecat5] =  useState({
        category:''
      });
      const [chuckjoke6, setChuckjoke6,] =  useState({
        joke: '',
      });
      const [jokecat6, setJokecat6] =  useState({
        category:''
      });
      const [chuckjoke7, setChuckJoke7] =  useState({
        joke: '',
      });
      const [jokecat7, setJokecat7] =  useState({
        category:''
      });
      const [chuckjoke8, setChuckJoke8] =  useState({
        joke: '',
      });
      const [jokecat8, setJokecat8] =  useState({
        category:''
      });
      
        useEffect ( () => {
          
          fetchData();
        }, [])
        const fetchData = async () => {
      
          const result = await axios.get('https://api.chucknorris.io/jokes/search?query=all');
        
          console.log(result.data.result[7].value);
        console.log(result.data.result[7].categories);
        console.log(result.data.result[7].id);
        setChuckJoke1({
          ...chuckjoke1,
          joke:result.data.result[7].value,
        });
        setJokecat1({
          ...jokecat1,
          category:result.data.result[7].categories,
         
        });
        setChuckJoke2({
            ...chuckjoke2,
            joke:result.data.result[7].value,
          });
          setJokecat2({
            ...jokecat2,
            category:result.data.result[7].categories,
          
          })
          setChuckJoke3({
            ...chuckjoke3,
            joke:result.data.result[7].value,
          });
          setJokecat3({
            ...jokecat3,
            category:result.data.result[7].categories,
          
          })
          setChuckJoke4({
            ...chuckjoke4,
            joke:result.data.result[7].value,
          });
          setJokecat4({
            ...jokecat4,
            category:result.data.result[7].categories,
         
          })
          setChuckJoke5({
            ...chuckjoke5,
            joke:result.data.result[7].value,
          });
          setJokecat5({
            ...jokecat5,
            category:result.data.result[7].categories,
           
          })
          setChuckjoke6({
            ...chuckjoke6,
            joke:result.data.result[7].value,
          })
          setJokecat6({
            ...jokecat6,
            category:result.data.result[7].categories,
        
          setChuckJoke7({
            ...chuckjoke7,
            joke:result.data.result[7].value,
          });
          setJokecat7({
            ...jokecat7,
            category:result.data.result[7].categories,
           
          })
          setChuckJoke8({
            ...chuckjoke8,
            joke:result.data.result[7].value,
          });
          setJokecat8({
            ...jokecat8,
            category:result.data.result[7].categories,
            
          })
      
          };

}