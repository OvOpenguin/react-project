import $ from 'jquery'   //jquery 要在react專案中匯入使用
import { useEffect } from 'react'
import '../css/app0826c.css'

const APP = () => {

    // jquery 須放在useEffect內使用
    useEffect(() => {
        // 現代寫法 => .on('event',function(e){})
        $(function () {
            // has => 檢查是否有指定的名稱
            $('a:has(.ttpShow)').on('mouseover', function (e) {
                $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
                $('#ttpPanel').css({ top: (e.pageY + 20) + "px", left: (e.pageX + 10) + "px", }).fadeIn('fast');
            }).on('mousemove', function (e) {
                $('#ttpPanel').css({ top: (e.pageY + 20) + "px", left: (e.pageX + 10) + "px", });
            }).on('mouseout', function () {
                $('#ttpPanel').remove();
            })
        })


        // 過時寫法
        // $(function () {
        //     // has => 檢查是否有指定的名稱
        //     $('a:has(.ttpShow)').mouseover(function (e) {
        //         $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
        //         $('#ttpPanel').css({ top: (e.pageY + 20) + "px", left: (e.pageX + 10) + "px", }).fadeIn('fast');
        //     }).mousemove(function (e) {
        //         $('#ttpPanel').css({ top: (e.pageY + 20) + "px", left: (e.pageX + 10) + "px", });
        //     }).mouseout(function () {
        //         $('#ttpPanel').remove();
        //     })
        // })


    }, [])



    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptates tempora velit! Nemo id laborum
                eaque magnam. Voluptatibus et aliquid vel nesciunt corrupti officiis harum sunt non inventore, dignissimos
                reiciendis? Similique,
                <a href="#">
                    asperiores
                    <span className="ttpShow">tooltip內容說明</span>
                </a>
                tempore libero laboriosam perferendis odit quasi blanditiis hic expedita.
                Quas perferendis aut tempore provident nobis sunt possimus veniam explicabo rerum iusto fugiat voluptatum,
                consectetur, temporibus et! Et laborum, illum ipsam vel amet sapiente explicabo. Harum aspernatur beatae sed
                iusto nemo maiores esse quidem, molestias voluptas impedit aliquid dolorem atque dolore architecto fuga vel
                similique. Reiciendis voluptates rem magni sunt nam libero tempora id laborum molestias animi nesciunt
                tempore, ut temporibus! Tempore, corrupti suscipit. Laudantium, et sit dolorem error eveniet odio
                dignissimos nobis illum. Veritatis, libero exercitationem? Libero est aspernatur dolores sint in esse
                repellat! Deleniti, quo? Nihil eaque dolores temporibus aliquam
                <a href="#">
                    <img src="./images/p4.jpg" alt="p4" style={{ width: "200px", display: "inline-block" }} />
                    <span className="ttpShow">圖片說明</span>
                </a>
                quasi quam debitis voluptatibus vel saepe
                molestias blanditiis asperiores, sequi, quidem doloribus excepturi consequuntur ea suscipit! Tempore est,
                veritatis nemo quo quos laudantium iure iste cum praesentium officiis, fugit quod expedita labore, iusto id
                voluptatibus. Quasi sapiente distinctio velit delectus, beatae reiciendis sit accusamus necessitatibus
                repudiandae vero veniam libero facilis consectetur dignissimos natus iusto voluptatum quas repellat soluta
                ipsam ullam nobis non. Fugiat neque nulla non recusandae labore quia vitae incidunt possimus inventore. Quo,
                ullam alias iusto dolores voluptates, adipisci expedita accusamus sit quaerat asperiores quia illo dolorum
                beatae impedit officiis et at numquam laboriosam ipsum autem
                <a href="#">
                    illum.
                    <span className="ttpShow">tooltip內容說明</span>
                </a> Aut temporibus natus, molestias fuga ab
                odio sequi, reiciendis voluptatibus incidunt libero fugiat magnam blanditiis harum odit necessitatibus error
                ipsum eligendi voluptates. Nihil perferendis earum sed aut laboriosam possimus voluptatum itaque! Deleniti,
                quasi. Mollitia porro possimus odit veniam veritatis temporibus, blanditiis ut eius libero numquam quas
                cumque deleniti illum voluptatum quidem fugiat quisquam doloremque corporis atque est. Ad fugit ipsum quae
                sunt enim quo, optio impedit quos quod accusantium.
            </p>
        </div>
    )
}

export default APP