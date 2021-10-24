import React from 'react'
import ProcessImage from 'react-imgpro';


const Album = (whether, timeofDay) => {

    if (whether == "sunny" && timeofDay == "morning") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://f4.bcbits.com/img/a2828033477_10.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "cloudy" && timeofDay == "morning") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://www.showyourarts.com/media/gallery/2106/image/IMG_20150718_063759_264.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "rainy" && timeofDay == "morning") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://media.istockphoto.com/photos/green-grass-as-background-picture-id544970412?s=612x612'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "thunder" && timeofDay == "morning") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://i2-prod.dailyrecord.co.uk/incoming/article5987357.ece/ALTERNATES/s810/JS67338886.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "sunny" && timeofDay == "afternoon") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://myrepublica.nagariknetwork.com/uploads/media/renatures.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "cloudy" && timeofDay == "afternoon") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532987738/TheBestColleges.org/images/study-tips.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "rainy" && timeofDay == "afternoon") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://bkhonline.com/wp-content/uploads/2017/08/The-Blues-1024x865.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "thunder" && timeofDay == "afternoon") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://nbcmontana.com/resources/media/53f19d01-8af2-49bf-80fe-7bedc4028943-jumbo16x9_1viewer.jpg?1564735044264'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "sunny" && timeofDay == "evening") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d68ec38-4191-4ddf-a20d-684ebacf09d0/d3ia62t-c965a236-21b1-4b0c-998c-8602d3acdaa0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkNjhlYzM4LTQxOTEtNGRkZi1hMjBkLTY4NGViYWNmMDlkMFwvZDNpYTYydC1jOTY1YTIzNi0yMWIxLTRiMGMtOTk4Yy04NjAyZDNhY2RhYTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n2lH_G4b43zH9AHOOS9uu7rAY_CqIWF91JM80NLNljU'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "cloudy" && timeofDay == "evening") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://pyxis.nymag.com/v1/imgs/280/a09/831956806c59629838ae46bd3e08255aaa-12-concerts.2x.rhorizontal.w700.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "rainy" && timeofDay == "evening") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://miro.medium.com/max/1400/1*OSBo6euKrh4TwdSchg_Yhw.jpeg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "thunder" && timeofDay == "evening") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im067wBQCCos/v0/1800x-1.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "sunny" && timeofDay == "night") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://img.apmcdn.org/c75e4ad850e43237fe0568a59ab71b15cb2511ac/uncropped/b80d45-20120627-flute-concert.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "cloudy" && timeofDay == "night") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://i.pinimg.com/564x/7d/4b/2b/7d4b2b5911748e32d8e0c20728e96c28.jpg'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else if (whether == "rainy" && timeofDay == "night") {
        return (
            <div className="widget-container">
                <ProcessImage
                    image='https://cdna.artstation.com/p/assets/images/images/004/779/896/large/drea-horvath-rainynight-1080p.jpg?1486212288'
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    } else {
        return (
            <div className="widget-container">
                <ProcessImage
                    image="https://cdn.pixabay.com/photo/2017/08/19/17/23/lightning-2659244_1280.jpg"
                    resize={{ width: 400, height: 400 }}
                    colors={{
                        mix: {
                            color: 'mistyrose',
                            amount: 20
                        }
                    }}
                    processedImage={(src, err) => this.setState({ src, err })}
                />

            </div>
        )
    }



}

console.log("pull")
export default Album
