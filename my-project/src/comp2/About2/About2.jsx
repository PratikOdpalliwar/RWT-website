import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      className="mt-10 py-16 bg-black
    "
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-10 mb-8 lg:mb-0"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-semibold text-gray-100 mb-5">
              About Us
            </h2>
            <p className="mb-8 text-gray-300 text-lg leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              libero, impedit voluptates animi quasi deleniti laboriosam in,
              enim similique ut placeat pariatur molestiae magni id natus
              voluptatem laborum, distinctio a. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Consequuntur, maiores culpa
              reiciendis tenetur quibusdam voluptas hic consectetur non magnam
              ut.
            </p>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 lg:pl-10 flex justify-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQEBMQEBAQDhAQEhAVEBAQEhUTFhcYFhURGBMZICggGB4mGxMYITEhJykrLi4uFyUzODMtNygtLisBCgoKDg0OGxAQGi0mICYxLy8tLy0vLystLTYtMjUyLy0vLTUtLS0tKy01Ly0tLS0tLS0tLS01LS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBAgj/xABHEAACAgEBAwYICQsDBQEAAAAAAQIDEQQFEiEGBxMxQVEiUmFxgZGSoRQjMnKTorLBwhUXJDRCU3SC0dLhYnOxJUNko/IW/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMFAgQGAf/EADQRAQACAQEGAwYFBQEBAQAAAAABAgMRBAUSIVFhEzFxIjNBgZGhFBUjJMEyUrHR8HLxJf/aAAwDAQACEQMRAD8Aj51ziwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxgbu2NJ0N06/F3ffFP7yLFfjpFkuanBeatMlRAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgbmq0O5f0Hapwh6Xj+pFW+uPjTWx6X4HY5xaNzXW46nCqX1Ir7jX2C3Fhj5tjeFeHPPycTaWl6G2dfiSwvN1r3M2cd+OsWauWnBaatYkRgAAAAAAAAAAAAAAAAAAAAAAAAAAAOjHZ2Z6aHHOoUG/5rZQXuS9ZDOTlaen+k/he1SOv+3c2tps7Z6Ndutofo8CT9xrYrabJr2ltZa67Zp3hn52KsayEvH00fWpSX9DDdk/pTHdlvWNM0T2a/K7Zy/KUa5fJv8Ag31oqD98WZ7Lk/bzPTVjteP9zEddP9IpOLTafBptNeVcGb0TrCvmNJ0eHrwAAAAAAAAAAAAAAAAAAAAAAAAABgWAtnbu1NDR+60lDfnhGUn70VXiftslusyuPC02rHXpEfZ93UZ2+vnxn6qc/ceRbTYf+6vZr/8Aof8AdH1ztUZs00vGVkPVKL/Eebst7N4N7V1tT5svODp93XaG3xp1w9iyL/GY7DbXDkr/AN5Mtvrpnx2/7lKF8q9L0Os1EOxXzkvNLw17pFjs1uLDWeys2qnBmtHdyTYa4AAAAAAAAAAAAAAAAAAAAAAAAAN7YOl6bU01ePfWn5s5l7kyLNfgx2t2TYKceSte606qN7bU59lWgh65PC9zZSTOmxxHWV9FddsmekNerT527KXi6NT+rGH3mU2/ZRHdhFf30z2e85lG8tI//NjD2v8A5G77aTeOxvKuvBPdl5xtPmOls/d6+peiT/rFGOwW53r1iWe8K8qW6WhEudXS7msVnZbRCXpjmL9yRv7tvri06Srt6U0zcXWENLFWAAAAAAAAAAAAAAAAAAAAAAAAAAlXNnpOk10ZdlVdlnpxur7Zo7wvw4ZjqsN204s8T05rL2dR+m6q3/Rpa16IuT+0imyW/RpX1ld46/rXt6Q19NR/1S6fdoaF7U5f2Gdrftqx3lhWv7q09oe8uKN+ml+Lr9JL1z3fxDZLaWt/5k22utK/+oZuWWn39LLvhbRZ7NkW/dkx2S2mWPnH2ZbZXXFPaYn7ozzvaXNdF3i2Trfmkt5fYZubrvpa1Wjvans1t8lYl0owAAAAAAAAAAAAAAAAAAAAAAAAAWDzRdGp3uUoKyUYRhBtKTjluTS7ewqd6azFeXJcbp4Ym2s81j6bT7krJfvbFP1QjDH1SptbWIjoua10mZ6sNGnxqLbPGoohn5srX+JGU2/Tivef4Y1ppltbtH8m26N+tLuv08/ZthJ+5DFbhtr2n/BmpxV07x/mGbaOn6WqdfVvwlHPnRjS3DaLMsleKswjfOVuPQzjOcIz3q5VxcknKSkspLt4Nm3u/XxomIae8tPAmJnmps6FzQAAAAAAAAAAAAAAAAAAAAAAAAAPYyaaabTTymnhp9+TyY1exOiYcn+cHUUYhqP0mtcMt4tS8kv2vT6yvz7vpfnTlP2WOz7yyU5X5x91lbE5Q6bWLNE05Y41vwbF54/euBUZtnyYp9qF1h2nHmj2Z/229obQqohv3ThXBdsnjPkS7X5EYUpa86VjVLkyUpGt50V9yg5yW8w0UcdnTTXHzxh979RaYN2fHJPyhT7RvT4Yo+coBrNXZdN2WzlZN9cpNt+byLyFpWlaxpWNIVN72vOtp1lhM2AAAAAAAAAAAAAAAAAAAAAAAAAAAAD6rslFqUW4yTypJtNPvTXUeTETGkvYmYnWGbXa62+W/dZO2WMZlJywu5dxjTHWkaVjRlky3yTradWuZsAAAAAAAAAAAAAAAAAAAAAEp5AbEo1ttld+/wCDUpx3Zbv7WJefrRo7dnvhrFqLDYMGPNaYunH5uND3XfS/4K38xz9votPyzB3+p+bjQ9130v8AgfmOfsflmDv9Vd8tdmVaXVOije3I1wb3pbz3pLL4+Zottky2y4+Kym23FTFl4KeSZ8neQ+i1Gmpukrd6yqMpYswt7qlhY70yuzbdmpktWNOU9Fns+wYcmKtp15x1dL83Oh7rvpf8Ef5jm7fRN+WYO/1YtTzcaPcludKp7ktxuzKUscG1jjxEbxy689GNt2YdJ011VHODi3FrDi2mu5rg0X0TExrDnpjTk8PXi1Njc3mmlRXK9W9LKuMp4s3UpNZxjHZnBR5d45YvMV009F/h3bimkTbXVu/m40Pdd9L/AII/zHP2+iX8swd/qfm50Pdd9L/gfmObt9D8swd/qqfalUYXWwrzuQusjDLy91SaXHt4IvMUzNImfPRz+WIi8xHlqkHJbkTdrUrZPoaH1TazKfzY93lfvNXaNuphnhjnLc2bYL5o4p5QnGk5udFBeGrbX3yscfdDBW23jmny0j5LOu7MEeestr/8Hs/9x/7bv7jD8fn/ALvtDP8ALtn/ALfvP+3zLkBs9/8AZa81139x7+Pz9ftB+XbP/b95RHl/yU02iphbR0ilO5QalPejjdk+7PYu039h2rJlvNbdFft+yY8NItTqghZKkPQAAAAAAAAAANvZu07tNPpKJuue645STyuvGGsdiI8mKmSOG8awkxZb451pOkr82Xa501Tk8ynTXKT4LLcU2/ecxeIi0xDrcczNImejS5WaydGkutqlu2QrzGWE8PKWcPh2kmzUi+WtbeSLar2phtavmozXayy+bttk52SxmTxl4WF1eRHSUpWleGscnLZMlr24rTzTnmt2nfO56d2N6euiclXiOE96OMPGf2n2lbvHFSKcenOZWu682Sb8EzyiFoZKZeDApTnD2b0Gtm0sQvSuj55fKXtJ+s6HYcvHhjtyczvDFwZp6Tzc/kts74Tq6auuLsUp/Mj4Uvcsekm2nJ4eK1kOy4vEy1qvtHMOsegRTnH2lfptNGzTzdcnfGEmlFvdcZd6eOKRu7BjpkyTF415NDeGXJjxxak6c1Ycl9mfDNXXVLLjKTnY/wDSvCl6+r0lztOXwsU2j0hR7LinNlis/Ne9VailGKSUUkkuCSXUkjmZnXm6qIiI0hx+VfKCOgp6VrfnKW5XDON6XXxfYl2mxs2zzmvwx5fFr7VtMYKcU+fwVlfzga+TyrIQXixqrx9ZN+8uI3fgj4a/NR23lnmfPT5JByD5XarU6nodROM4yqm18XCL3lhrivJk1dt2THjx8VIbmw7Zly5eG8s/O/Z8TRHvum/VHH3mO649uzPe0+xWO6ry6UIAAAAAAAAAAAPGeD9DbF/V6f4er7COVy/1z6y7DD7uvpDm8uv1DUf7X4kTbH7+qHbfcWUYdK5VYPM/TmzUT7q64587b/CVW9J9msLjdEe1afROOUG1Vpugk3iNurhTLzSjL/hpP0FZhxeJxdo1Wm0ZvC4dfjOjrohbCD86+zek08L0vConh/Mnwf1t31lju3Jw5Jp1/hV70xcWOLx8P5crmj2dmV2pa+SlTB+V+FP3KPrJ96ZOUU+aDdOLna/yTrlNtL4Lpbb01vQre5nj4b8GPDztFbgx+Jkiq02nL4WK13SrllJ96TIZ5JonWEW5za97QTfi2VS+sl+I3d3zpnj5tHeUft5+SKc0dKeoun2woUV/NJf2m7vSfYrHdobpr+paey1ilXyq+d29u+mvsjTKePLKTX4C63XX2LT3UW9re3WvZB6dNZPO5Cc8de7CUsefBZTatfOVVWlreUNvSUaqmSsqhqK5rOJRrsTWeD44I72xXjS0xMJKVy0nWsTEvra2r1dij8KlfKMW93pFPCb68ZXkPMVMVf6NPk9y3zWiPE1+bmk6AAAAAAAAAAAAHjA/Q2xf1en+Hq+wjlMv9c+suww+7r6Q5vLr9Q1H+1+JE2x+/qh233FlGHSuVWjzQVfE3z8a6MfZjn8RS70n26x2X26Y9i093nO9biqiHfdOXsxx+I83XHt2ns83tb2Kx3SzkvtL4TparuuUq0p/Pj4MvejS2jH4eSarDZsvi4q2bW1NEr6bKZdVtcoebK4P0PiYY7zS8Wj4JMtIvSaz8XO5G7Kek0ldUlizDnZ8+Ty16OC9BLtWXxcs2jy+CHY8PhYorPmi/O5tDEKtMnxnJ2z80eEV62/ZN3deP2pv8mjvXLpWtPmm+xbd/T0z8aip+uKK3LGl5jus8M8WOs9oc7l1Vv6DULuq3vZkpfcTbHOmeqDba64LIZzQS+N1C76qn6pS/qWG9I9mqu3RPtWWiUy8VPzuV41NUu/TY9U5f3F3uuf05juoN7R+rE9n1za7f0+lVsL7Ojdk4OLcZOPBNPLS4dfaebw2fJkmJpGuj3du048UTW86arR018bIqcJKcJJOMk000+1MppiYnSV7W0WjWPJDOdxfolb7tVH7Eyw3Z72fT+VZvb3Uev8AEqmL1z4AAAAAAAAAAAPGB+hdi/q9P8PV9hHKZf659Zdhh93X0hzeXT/QNR/tL7SJtj9/VDtvuLKNOlcquDmrp3dFvePfZL1Yj+EoN4zrm07Q6PdldMGvWXB537fjNPDuhbL1uK/CbO645Wn0am959qserY5o9pZVulb6mroLyPwZr17vrMN54+cXj0Z7qy8rY59VjlUuXgFG8uto/CNbbJPMa5dDDzQ4P628/SdHsWPw8MR15/Vy+3ZfEzzPTl9Fscird7Q6d91EY+z4P3FJtcaZreq/2OdcFfRtcoad/S3x79NavqswwTpkrPeGe0RritHaVV82WuVWtUW8K+uVX83CUfs49Jdbxx8WHXpzUW7cnDm0n48lylA6NCec/Ys9RTC6qLnOiUsxSy3XLGWl24aXvLDd2eMd5rbylWby2eclIvXzhUheufXvyM/UdP8Aw8Dmtq99b1dVsnuK+jj860c6JPu1Fb90l95Pu333ya+9I/R+aoC/c4AAAAAAAAAAACac1mnrlqLJ27jUKcLf3cb0pLDWe3EWVu8rW8OIjqtN11rOSZt0WstVWv26/aiUvDbovuOvV5PUVNYc62n2OUWhw26S84qz8YVtr9BV+W60lX0Mty1pbm5wg85XV8qPvLal7fg56+X3U16U/Gx5aef2WTXfVFYjKtJdilFL1FTw2n4SuYtSPKYc/b9dN2ntg3VKTosUcuDae68Y7uJJh46XiefmizxS+O0Tp5Sp7kftL4Nq6rW8Rc+jn8yfgt+jKfoL/asfiYphzuyZfCzVleS1dfjw9uJznDbo6jjr1aG3trwo09tynByhVJxSknmXVFetokw4bXvFdEWfNWmO1tVTcgaI2a6vpN1xirJy38NPwXjOevi0Xm22muGeFz+wVi2eOJc8NRUlhSrSXUlKKRz/AA26S6SLUjymHr1Vfj1+3EcNuj3jr1VfzoQjXqKLqNyL6N+FDdWJwllS4dvhL1Fzu7W2O1bffuot56VyVtT/ALRJ+S3LqjURUNRKNF6ST3nu1zfjRk+Cz3P3mltOw3xzrXnDe2XeFMkaXnSUthNS4pprvTyjRmNPNYRMT5PmVEH1xi/PFM94p6vOGOjJGKXBcF3HjJE+dBfoEvJdU/fj7ze3dP68fNX7z9xPrCmy/c2HoAAAAAAAAAABoDzAe6mA81e4Bq8wHpgAHhgPQPBngcPIevRYAcA8AMtN84fIlOHzZOP/AAYzWJ84ZRe0eUs35Ru/fXfSz/qeeHTpH0ZeNk/un6n5Ru/fXfS2f1Hh06R9Dxsn90/V8W6y2a3Z2WSj3SnKS9TYilY5xDycl7RpMywGbAAAAAAAAAAAAAAAAAdbkzoldenJJ10xd1icowi1Dqg5SwlvScY8e819pvw05ec8mxsuPjvz8o5u/bsxXarTX2xrkr4z6auE651u+mDluZrbS31GDxntZqxl4Md61meXlr0me/RuTi48tL2jz84jy1iO3Xk4+k2/qJualHp4ypuXRKEUq04SXSQSXgbqfZ2GxfZ8dYjTlzjn1/8ArXrtOS0zrGvKeXT09HW5P7OSohVNU41yn0kp20QnXDG7RKMZSUn4eZcFxWCDPk1vNo19ny5TpPX7ck+DFpjis6e15841jp8evNzuT91unWsgm4Sq00m1iLxZGyEc8V18WvSS5q0vwT1n7aSi2e1sfHHSPvrDc2Pq5XRr1Fm701e0NPSrVCEXZXbnfrlhYlhRznrxIjy0ikzSPKYmdOmnxSYck3iLz5xaI166/B9bd2jZCNihd8JU7NRCUVDCoVdlThPDimmm2s9R5hx1mY1rp5fPWJe58toidJ18/lpMNjb2j+GSqisKyqWlhZJJL4q+qFnSPHdJWetGOG/gxPSddPWJ00ZZ6eNMR8Y0ifSY11/ywbb29Ouelup3VX0U5xrcYqLh0s4KL4eJGKz5DLFs8Wi9beevn8o/ljm2mazS1fLp85/hg23rVp65QpnKfw/GpbnFZhVNYVfV8pvKbXZFY62ZYcc5La2j+nl84YZ8nh1mKz/Vz9I6eqKm+rwAAAAAAAAAAAAAAAAAAAAG7pdpzrqnTGNThb8tyrjKXDqxLrWHxXlIrYotaLTM6x3TUzTWk00jmy6bbVtdXQw6OMVYrVPcXSKa6pqfWmurzHlsFbW4p1/h7XaLVpwR692SzlBa1JKFEHZwsnCmEJ2LOXGTXY2uKWMmMbPWPjPLy5+TKdptMeUc/Pl5sOt2vO6yFs4071ajFJVRjFqPCKce1JJIyphitZrEzz7sb55vaLTEcuzZlyluc7LHDTuV0VGxuiD3lnPHztLPmRh+GrpEazy8ubP8XbWbaRrPnyYfy7dvQl8UlTJyrqVUI1Rk/wBvcXBy8r48DL8PTSY58/OdebH8TfWJ5cvKNOT7t2/ZLf8Ai9NF28JyjRCMpLeUmm+5uKyeRs9Y05zy7vZ2m068o5+fIu5RXylKSdcHZQ9PPcrjDNfBJcO1JJJ9iEbNSIiOk6/MttV5mZ6xpyYNdtWd0a4SjUlSt2G7XGL3eL3W11rLb9JlTDFJmYmefdhfPN4iJiOXY2ntaeoUFONMejjux3KowaiuqOV2Lu8ox4Yx66a8+smXPOTTWI5NAmQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
