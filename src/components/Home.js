import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://hub.dummyapis.com/employee")
            .then((res) => res.json())
            .then((json) => {
              console.log(json)
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div class="bg-white">
          <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">View Different Employees here:</h2>
            <h4 class=" font-bold tracking-tight text-gray-900">Small Note : "Api used here is : https://hub.dummyapis.com/employee " As I couldn't find some suitable api so user displayed after clicking on any card might differ due to api ,but code structure is correct, so please ignore this issue</h4>

            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {
                items.map((item)=>(
                    <Link to={`${item.id}`}>
                      <div class="group relative">
                        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                          <img src={item.imageUrl} alt="No image" class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span aria-hidden="true" class="absolute inset-0 "></span>
                                <b>{item.firstName}{ item.lastName }</b>
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Contact: {item.contactNumber}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                ))
              }
            </div>
          </div>
        </div>
    );
    }
}
export default Home