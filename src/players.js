const players=[
    {"name":"cr7","team":"alnasser team","jersey_number":7,"natonality":"portugais","age":39,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/250px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"},
    {"name":"messi","team":"barcelone team","jersey_number":5 ,"age":36,"natonality":"espagnol","image":"https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"},
    {"name":"neymar","team":"rm team","jersey_number":10,"age":32,"natonality":"bresilien","image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcWFRgVFhYZGRgZGR0cHRwcGhocGhwaHBgaGRgcGB8cJS4lHB4rIRocJzgmKzAxNTU1GiQ7QDs0Py40NjEBDAwMEA8QHhISHzQrJSsxND00NTQ0NDE0NDY0PTQ2NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPcAzAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwQFBwj/xABAEAABAwIEAwUFBgIJBQAAAAABAAIRAyEEEjFBBVFhBiJxgZEHMqGx8BNCUmLB0XLhFSMkNYKSorLxFDNTY7P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKREAAgICAQQBAwQDAAAAAAAAAAECEQMhMQQSQVETMmGxBSJxoSOR8P/aAAwDAQACEQMRAD8A9mREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARWkwtHF8Vp05zvAjbeeQCA30UYxHa+iIymXETliZEEgy2RFp8Eb2tpuDA2JdEzPdJBMWmT4KO5E0yUItbCVw9ocPPx+vgQtlSQEREAREQBERAEREAREQBERAEREAREQBEVEAJXG4n2gpUZDjJA0F/AeKrxLtDQosc97oDXZb272wBNr7c14p2k4/9tVcWu7h7zQLagiXE66x5QobolKyYdoe3hIy0i5musSJDsrrEmbG3TcqIYnipqua9z5eZzZjDxAsYNspsY5g7FcLFPZLspIIBgSWwIkaXMfquU17RUFi4CCBcmbTpyP0Cs2my60S176lAF74cHmWuAzDIQS6NIcbXtGU6E2vbxNwy5Luc4ANBzlxLxlcRqDrc2h1go1juJPeB91onKIudcxjlra4t4pRxzmlrw2S2DcCG5dDt0N+c9VXtLWek4Hj9dgaz7YAGQ6DlIJ1dngg3t3ZtJAMLqcN7XVWvcJztgznMBpEAEuOl9hqLheT4XHQ7lAIIBy5dMoG/wB2LHQbaLc/pYyYaBLQ0yDr96OWoO2yVK+R+0+jsDiQ9jTmaTF8oIE9Abhba8b7LdqXU3Nz1CWhlmAOMSb3IAJ0nU2K9Q4NxIVmZrakW0trB3jSRyWqdmbVHUREVioREQBERAEREAREQBERAEREAWOpEGYjqsi5XaQf2Wt3ssU3GYJ0EkEC5BiPNAeBduOMB9R9Nj5ph0gS43GkCYsDGaB7sSdTE2VJN5+Eq3EPzuLgLucSBykzA9V2sBgWsEm7vqwVZNIvGLka2H4eXuGY+J19OfipBhOAsiSL8zJ+SvwbNl3sJQ3XNObOrHiiaWG7PsHL/LAHXWSdPRbA7MUjcyP4bQRafHyXaw1Axot/D4U7rBzl7OhY4eiA4nsYcxcwzfQwbfxbeC42J4RUpvII0j5yNF6tUwp2+v3WtXwgIOZs/XRWjnkuSkuni+Dyj/qi1wMQRsTYDlfYyfXW69A7GdsHsdTY57WsDodmaQ0N71hlmT18PPldoezYe0vpDvgXboHeEbxPjZQ7CV3CG3F4IuJ1EHyMQeq6oSUlaOTJBxdM+raVQOaCNCAfVZFCvZpxQ1sKGucC6mcpEyeYJkzv+ymq2MAiIgCIiAIiIAiIgCIiAIiIAol7TcQGcNxBkglmURzc4NA85hS1QT2wNnhzh/7aXl3xqgPCuG4YTmI0iP3+ua7DBJWnhmQt/BtusJvZ0wVI6PD2d4AqVYZllHcKwk9VJuHU9JlYTOmGjfoMhdPD07LBTpFbY2WSWy7ZkNAbj5fFaOJoDwW5nIWN4lWlTKxtHBrUVAO03Dsry8DV1+6I6kmeZ5L03EU7wuBxXCB0g8+Q0kW8CUxS7ZE5Y90Ts+x7DkYd9QgQXwOsWPUX5/qvR1AvZLRLMNWYTZtdzRoNGtO3Qg+anq9BcHmPkqiIpICIiAIiIAiIgCIiAIiICihPtZ/u9w51ac/5pt6KbKE+0HF0a+CxNJlVj6lINeWte0uAY9rnSAZsAZUPglcni9ILboVGsMk35fWi16TbAozDNmXuPPkB4rDzs6b1o7dHjtOmO8256/yXd4T2go1DAdB62n1UeoDAZYqug88xBHhMfBYcfwzDAOfh67pZJLHy1wixyzEwquMfTLKUvaPUMNimu0IWari2tF9VCux+Ic8gTpddntVhw1l3GDA6X5rLh0a8qy9/bGiCQGl0akEEddJW/heMMqQWSQd9uW94lefUWYJrg6s4uPUw3lEyBvpKm/BsRg8uahktqQ5rss3lxa45N/eiFo0qKJtM36rO8fBcrHtkR9dFtmk8PLw7M063vHPrssHEWkAnmuZqno3T1s7/ALP6OWjVMRmrE7/+OmDr1B0UrXD7IUi3CsJ1cXO8i45f9IC7i9KH0o8yf1MqiIrFQiIgCIiAIiIAiIgCIiAxV5yujXKY8YsvnDCMlokmYPekg3BDhOuhI8CQvpMr51xNLK97B72d8eAe4X9Flk8G2LyatGnAjlb0sra3D3P0zRybr/LyWWi3vEciR8VIuFBpOnmsm62bRjejhYbgtMjK6lVvEwDBgze4m51W72jpMqBncfnYMoc5wLiNTnMFztT7zj7xUrqtAE/NRbiNSXaRFlCm2yzgkjf7HHLUIjUel1NOJYYVWOZAMgxN4OxCifZXDy/NKmxYW3WcubNIr9p527gIbmY5lQh+rmmXGxaWuIyuDYcRl0M6Lr4HsvRLWlprh7Q0NeXHOwNEMa1xGZrR+EHLpZS2sxvLks+GbOitcuLKtLmjm8OwTqbcrn5+pAB8SBDQT0A+Kw8Wp525BqYaPEmAu7VpiFxKv/cYB+JseMiFm1TLJ2b2MqVWU5aS3IyGUw4taA0QMxF3G0+gtcqT8PqOdTYXe8WtJ8SLqMUMR9o1ziD3S5pDu7IEtdzI3OmyknCHTRpn8oXRhk23bOfPFJLRvIiLpOUIiIAiIgCIiAIiIAiIgKL5/wAa17K76jbObUeIhpsXuBs8ESATqF9ALybtT2VxDa730qbqjKj3OGWCQXEuc1wmRcmDpEXVJp1o0xtJuyBYZ3ecBoHHW5iTHjopDwuuGm6j+Owb8NiH0auUPGUkNMgFzWviRrGaJ6LYp1N1jJG8ZEn4pxMNZbVRTEY3I3M8Ek6ACTK2MVimiC7XYarRxOJzQABcwN4URjRMpWdbgPaT7J2YtcGuiQ5sEeE/oplxPtcKcF9Gs4OAJLaZygcy4wB4CT8FBqdB9JjXupZwYID2Eg8oERInbSCpRR4+6zKjJbF2gBgaD7trWNr9eih0Wi/ZK6OKa9rXNPdIBB6dfrZdGhYfXwXHwXEKTgGghsAHKYEWmOkLosqjyVU6Ly3wXYioo/jH99gnV7fQOC6+JeACZ/b4qKYnFAva4+41+sQBB7x62J+gVm7bC0iVB81HOHu3zERBgQZ6/upPwpkUWD8o/dcQAODWiDPuxczsVJKTIAA0AA9F0YI7bMOokqSMiIi6TlCIiAIiIAiIgCIiAIiIAiIgPnz2psjidUgAS1hmedMCfUfBcRlchltYkek26BTP20cPLMTTrx3alPJMffYS71LX/Arz6hVhpde0fHkspLZrF6M1Rji0Ze84ugb7G5Ow6rcwdGq4hrSxk2jMb+JAusfC61gNfrxW5UBiW/Xqq2axrk6+E4VjGSWPYZ+617x8CyP+V0qNXFwGVMO2o3W72vA3+8Q4f4TyUbwPFqkwK3kWMIB6WEqWcHxlWoAHOZbcNcB5d6JVJUuTeLT0jn4/GsbENex7z7jxlIMaBw7rxrBB28V1uz3GHF+R9jBJGp5kiLbnT9L9Ss1rabw8ggi4gAEzbpMwolgMU1lcv5934ch0877zCppoh6Z3uP8AFRkeGmJaBMQ7vktbY3EkDrcLF2OZnxVGdLuiJAApuJieZc2+luq4nE8Q05yJOZ4GW9wwOyy0blxi+sAdFJfZtSL8S95NqVIMAiBLz4A2ynW/eWkI7Rlklpno2GwNOn7jGt8AB5DkOi2kRdKVHK3fJVERCAiIgCIiAIiIAiIgCIiAIiICH+1HBNq8Oq5tWFjmnk77Ron0JHmvnh9U+6bR819Je0H+78R/C3/6MXgWOwYeJAAeB4TzB6rOTpl4q0amArZdYUjw2JYYAE85Ngocx2UkEabbytihii2AN1WUbNIyo9QwL6DGh2VhcPyidLef1yXUfjqTQHOZBMzlyjTwgafIry7+ki0aiOuxjmRY/O/Nbb+IksyB+sHxdFhz0P1Kz7DVZCUcX4jmNj3MpmPuktBAOhMeU32UeY0hri4ZmkiYdZxDtCdwJv8AQVj8c0NaBNjJJgSIkQBzPp530313vIa2ToGtbq0wL20N9eqlRoq5WbBxT3Oge89wAgXc4n0kuIPmvW/ZzgfsQ9hMuIa538RJnytHkoX2Y7PZCKtSM4lwb+Gd3dR8JPip72Vrt+2eMwBc1sAmCYJMgb2M/HQhRGVzSQlGoNsmKIi6jlCIiAIiIAiIgCIiAIiIAiKiAItbFYxlMS9waOpv5DUqJ9pu1gY3JR95wIzGRA0kDWb6lZSywi6b36KZJqEHJ8IjXtR7Vl2XCUiMjnEPP4i2HZR+UHU7kDbWBUiSBM7mPARr5rn8crE4sN2ZAHm3MfiVuseb9Rtrfl6pPdfwX6aTljTfL3/sx4nCNfqL891yq2De3QSOmvp+ykxpwsT6NlmpUdEo2RP7UiQZ+tdVkp4iIgXt63/dd9vDA90QLqR8O4C1lw0HcyD+kXmFZziQsbZGeF8Dr1jmDCxp+863djk65tup7wTgTKAEXO5OpI5awNBHmuhg6JgRbnz5cuS6FKnYSBp5emn14rCU7No40jVLiJ5DmDcxY/A89N5EQ3tzEUzN87i0gmRlAAIcLzI+CnWJpwC6bWm0numZHKxOx+agPbzDOLKAAJe55ECxPdgW5mJ28kx7kqK5k+xo9C9lHH6mIo1KNZ5e+i4ZXOMudTeDlzH7xBa4TyhT9eb+yjhBoU3vcZ+0gA8wJJLebLwDvDjoQvSF3PTq9o4YStWVREQuEREAREQFERa+IxLGCXOA+Z8ALlVlJRVt0DYVj6gaJJAHMmAuRiOKPM5G5R+J2viG7efouLiqDn3c5zj+YyPIbLz836nig+2O3/RpHG2d3E8fot0cXH8on4my4eP7TVHSGAMHPV37Bc12HIssZpELzcv6llnpOl9i6xpGsajnuJcSTGpufUrR46z3D4j/AGx8iuq2n6rV4rhi6lYSWQfTX4Ermw5azRk/f5MOsxueCSXr8Hm3ajCxVbVGhifIgfCR69FnoOBbJMG2pAFr763Xbx+FFRmU66gnSY35gzB8VxcIC0lrgQRYg6jlPPodwvp/rha5XJx/pnURnjUG9o3aYJAkXQtWRllfiGbhYWewUoMuJb6j9Qpfwt4ywB6D/hRbCVoImykeAxH1/wAqki8TstB2BV4cVjZUkK6VlZoW1aeZwkWEEGdNSQN5NvILl4bh4xeJlwmlSkE7OJ1aD+aIn8IdfvhZuJ4pxIoUr1H21jK3ck7W32F+Sk3CcC2jTaxt4u47ucfecfH4AAbLuxR+GHyS5fH2Xs8rrupS/wAcefJ0cKyIAsOXQCLfBboeRoVr0Bv6fX1os0rzM2R99xdE9NCsavybDa43WQOnRaSBaY+ulHUlZs4Lwb6LVbWI1us7agK7sfUQnw9+ijTRkREXQVOI7FvdMkNgGw184WtSoNuSTJ1O6rQaJ1P181tM6/Xovknlnldyd/ydSilwYfs7QNFY+lAW2QCrSNosqSgibOc6iD0Kxvw0LqCiFT7ONACs/idE2ctuGnZWPwkX23ttz8l1gOvzWQx49d1HxWuSDz/jHAnU3ZmAmm42/L0PTkVwsbwzOA4d14FidCPwu5tPqPUH1h9ENEES1w05fy+S4uP4GLubp9ar3Oi6pqoydSX9nzvWdFkwT+bBx+Dy1hIkOBaWmHNOrT+o3B3C2aJDwRMrv8b4MXXaIqNEAnRzfwu6cjsfEqOYNjiZaLgxFmkEWLXW94aeW1wPVnCM4/JDXtej0uh61Zo9suVyUpMuu7w58fX0Vz+JYUsaHkRPPn1hYOH4qDlkl3h9fUc1yONo9NNJ0TLDvlYeIY/LDGDPUfZrRfXc7c48DsFyMVjsjA0HvvBIg7DUm3uiZJtsBcqSdl+C5G/a1MxqPFs13Naec3zHfkIba4W+HAkvlycLhe2cvV9V8Ue2PLNrgXCfsWlzjmqvu92vXK0nad9zfkB36FOTHqsdCkSYHmeS6DGZQAFzdT1Dbe9v+jzOmwSyS758fkuA5IhSF556xVUcFWOqp4qWr5AVVSAhPVOAZW1CFf8AbDkVgBVYXTDqMiWnZVxTORRfqeV/0PyW2wyARvdczCmHvYeTv1WXgtfPTA5W8l4kHujc6BKQqFWzC0ILoVrXEK4O6oQn3QGcE3VCz8JV2UKwkA7/AC+aP7gZyD3h5qoG7T/hNh5cvkk+Hz/ZA0/iHkP3lQrv/rINTEYJlSRGV3I/XxFlDO0nZ91M/wDUsbdo/rAPvMH3hzc2PTwgzx7JEGD6iOovY+CtLnBp702+8BfxIgfBeh0v6hkwy/crXn+Djn0cO7vhp/YjOAoMr0muyh0CxItMRY7FcTFYBlJpe8gG7nEm3r0Uu4DWdTwlIuMvcwvg6kF2bYbB7R/Jb+ExYqtD8sG/vC7SLX3Fx0XTPO0nNRfbdLZ148tpXzRA+y3CnYiqcS9ssEZRaDlPcbJsQ0nMebjF7gegswp1cfIa+Z/ZZgZ1M+UfOU+zj3T5GSPnPxjoss/Xzy6iqSVJXZzPpoyl3zdv+jI0gCBYcgrp6LDmI1b5gg/OD6Sr2vB38tD6G65FNvk6KS4Lp6KpKSqTyVrrySXTugMqhBVASFZyp74IKgKjgjSquVbTRJUOhZIWFoV+ZawlS2VaI5has1iDqGifkfrqtfs5Whz2HaR6OP8ANW4MxUkm5bHmLfotHg9T+0uvAzu/1E/qV5EHaT9GpMCqELHRdaDssoOwW3dZBYSBqr2PlYK1OSraZgkdT/JQrT2DZmFlIBWNpkK2L3Wy0QXfZqjWBXjRUPVGl6IBWtjpFN5/I75LODyWHHn+pqdGO/2lQ9pkmLD8ObUw9JjxOVjNLEHKAfEdDIK36VJrRlaLKtKzQOQA+Cvlb/JJxUbdevF+yiikWBsKrjyVr28lVqpfhFi10osjgrcvVQ47BXLyP6j68IQOjUeYv/MI0qrlpqrRALtxoqtcrcs30P1qN1cPj8/D9lKTuwAVaSVUm5VRqqveiS0m0KmZKptKtZosZyfdVkoiL4bUBGgcT67Lk0KhbVcR+N3zMIi5ofSyWTfD1MwB53891dSqQ8jz+AVUVsfgMy1tQVgcyboi0fJBm0V2ZEU+QUHNXsPwRFaIZa+2iw4sF1N7dyxw/wBJRFD8g22/JVfHqiKy+keSx0hVaiKfLILw5XFqItI7QYAVpN0RTLhAuOiOFrqqK3v+CDBnIcAb8j+h69fksxMKqLKHklmviDcBVRFzz5ZZH//Z"},
    {"name":"mbappe","team":"psg team","jersey_number":20,"age":25,"natonality":"francais","image":"https://s.hs-data.com/bilder/spieler/gross/284095.jpg"}
]
export default players
