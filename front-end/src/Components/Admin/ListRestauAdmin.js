import React, { Component } from 'react'

 class ListRestauAdmin extends Component {
    render() {
        const {restaurant,deleteRestaurant}=this.props
        return (
            <div>
                <tbody>
          <tr class="hover:bg-gray-300">
            <td class="py-4 px-6 border-b border-gray-200">
              <svg class="fill-current w-4" viewBox="0 0 20 20">
                <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
              </svg>
            </td>
            <td class="py-4 px-6 border-b border-gray-200">{restaurant.name}</td>
            <td class="py-4 px-6 border-b border-gray-200"><img src={restaurant.img} alt=""/></td>

            <td class="py-4 px-6 border-b border-gray-200">
              {/* <form
                class="inline-block"
                method="POST"
                action="/dashboard/sets/1"
              > */}
                <button
                  class="text-white font-bold py-2 px-3 rounded text-xs bg-red-600 hover:bg-red-700"
                   onClick={()=>deleteRestaurant(restaurant._id)}
                >
                  Delete
                </button>
              
            </td>
          </tr>
          <tr class="hover:bg-gray-300"></tr>
        </tbody>
            </div>
        )
    }
}
export default ListRestauAdmin;