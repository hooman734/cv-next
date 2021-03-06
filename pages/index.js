import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
        <Head>
          <title>Hooman CV - Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {/* introduction */}
          <div className="mx-4 px-5 md:mx-9 md:px-9 my-1">
            <div className="place-self-center">
              <div className="pd-8 py-6 text-gray-800 hyphens-manual">
                <h1 className="py-2 font-black text-3xl leading-none">Hooman Hesamyan</h1>
                <p className="text-sm leading-tight">Seeking a Full-Stack Software Development position</p>
                {/* end introduction */}

                <hr className="divide-y divide-gray-700"></hr>

                {/* links */}
                <div className="grid sm:grid-cols-2 my-2 py-1">
                  <p className="sm:col-span-1 text-gray-600 text-sm">Margaryan Street, Yerevan, Armenia</p>
                  <div className="flex sm:col-span-1 justify-start sm:justify-end my-2 sm:my-0">
                    <table>
                      <tbody>
                      <tr className="leading-tight">
                        <th className="text-left font-bold">Email:</th>
                        <th className="text-sm text-right px-1 text-gray-600"><a href="mailto:hesamyan@gmail.com" target="_blank">hesamyan@gmail.com</a></th>
                      </tr>
                      <tr className="leading-tight">
                        <th className="text-left font-bold">Website:</th>
                        <th className="text-sm text-right px-1 text-gray-600"><a href="http://hesamian.com" target="_blank">hesamian.com</a></th>
                      </tr>
                      <tr className="leading-tight">
                        <th className="text-left font-bold">Linkedin:</th>
                        <th className="text-sm text-right px-1 text-gray-600"><a href="https://linkedin.com/in/hesamyan" target="_blank">linkedin.com/in/hesamyan</a></th>
                      </tr>
                      <tr className="leading-tight">
                        <th className="text-left font-bold">GitHub:​</th>
                        <th className="text-sm text-right px-1 text-gray-600"><a href="https://github.com/hooman734" target="_blank">github.com/hooman734</a></th>
                      </tr>
                      <tr className="leading-tight">
                        <th className="text-left font-bold">Phone:</th>
                        <th className="text-sm text-right px-3 text-gray-600"><a href="tel:+37477281774" target="_blank">+374-77-281-774</a></th>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* end links */}
                {/* education */}
                <div className="grid lg:grid-cols-2 my-2 lg:my-0">
                  <div className="lg:col-span-1 my-2 lg:my-0">
                    <h3 className="font-black text-2xl text-gray-500">Education</h3>
                    {/* AUA */}
                    <ul className="list-disc list-outside mx-5">
                      <li className="py-1">
                        <p><span className="bg-gray-200 rounded font-bold">American University of Armenia (AUA), Yerevan, Armenia</span></p>
                        <p>Master of Science in Computer Science, <span className="align-text-bottom italic">2017</span>- August <span className="align-text-bottom italic">2020</span></p>
                        <ul className="list-square list-inside mx-5 text-sm">
                          <li>Data Structures</li>
                          <li>Algorithms (Intermediate and Advanced)</li>
                          <li>Object-Oriented Programming</li>
                          <li>Theory of Computing</li>
                          <li>Network Programming</li>
                          <li>Computer-Aided Manufacturing (CAM)</li>
                          <li>Cryptography</li>
                          <li>Image Processing</li>
                        </ul>
                      </li>
                    </ul>
                    {/* Azad */}
                    <ul className="list-disc list-outside mx-5 text-gray-700">
                      <li className="py-1">
                        <p><span className="bg-gray-200 rounded font-bold">Azad University of Gorgan, Gorgan, Iran</span></p>
                        <p>Bachelor of Science in Civil Engineering, <span className="align-text-bottom italic">2011</span> - <span className="align-text-bottom italic">2014</span></p>
                      </li>
                    </ul>
                    {/* Babol */}
                    <ul className="list-disc list-outside mx-5 text-gray-700">
                      <li className="py-1">
                        <p><span className="bg-gray-200 rounded font-bold">Babol Polytechnic, Babol, Iran</span></p>
                        <p>Bachelor of Science in Mechanical Engineering, <span className="align-text-bottom italic">1999</span> - <span className="align-text-bottom italic">2004</span></p>
                      </li>
                    </ul>
                  </div>
                  {/* end education */}
                  {/* technical skills */}
                  <div className="lg:col-span-1 my-4 lg:my-2">
                    <h3 className="font-black text-2xl text-gray-500">Technical Skills</h3>
                    <ul className="list-disc list-outside mx-5 text-gray-700">
                      <li className="py-1">Languages <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Java, JavaScript, SQL, Python, Golang, C/C++, C#, F#</span></li>
                      <li className="py-1">Front-End <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">HTML, CSS, jQuery, tailwind, bootstrap, Semantic-UI, Angular.js, Angular, React, Vue.js</span></li>
                      <li className="py-1">Back-End <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Node.js, Express.js, .NET Core, Koa.js, Flask, Django, Spring Boot</span></li>
                      <li className="py-1">Libraries <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Tkinter, Sequelize.js, Entity Framework.Core</span></li>
                      <li className="py-1">Database / Storage <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">SQLite, ​MySQL, Postgres, Oracle SQL, MongoDB, S3</span></li>
                      <li className="py-1">Application Software <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Git, Linux, Heroku, Docker, docker-compose, localstack</span></li>
                    </ul>
                  </div>
                  {/* end technical skills */}
                  {/* experience */}
                  <div className="lg:col-span-1 my-4 lg:my-2">
                    <h3 className="font-black text-2xl text-gray-500">Experience</h3>
                    <ul className="list-disc list-outside mx-5">
                      <li className="py-1">
                        <p>Graduate School Internship Project - Summer<span className="align-text-bottom italic"> 2020</span></p>
                        <ul className="list-square list-inside mx-5 text-sm">
                          <li className="py=1">Used Python, TKinter to create a download-manager with chunking support and GUI S3 browser</li>
                          <li className="py=1">Used Node.js, Socket.IO, and React/Redux to create an online chat room with channel support</li>
                          <li className="py=1">Used .NET Core to create a public traffic transportation monitoring with route suggestions</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* end experience */}
                  {/* honors and awards */}
                  <div className="lg:col-span-1 my-4 lg:my-2">
                    <h3 className="font-black text-2xl text-gray-500">Honors and Awards</h3>
                    <ul className="list-disc list-outside mx-5">
                      <li className="py-1">
                        <p>Chancellor Award and Aurora scholarship from American University of Armenia, <span className="align-text-bottom italic">2019</span> and <span className="align-text-bottom italic">2020</span></p>
                      </li>
                    </ul>
                  </div>
                  {/* end honors and awards */}
                  {/* general skills */}
                  <div className="lg:col-span-1 my-4 lg:my-2">
                    <h3 className="font-black text-2xl text-gray-500">General Skills</h3>
                    <ul className="list-disc list-outside mx-5">
                      <li className="py-1">
                        <p>English skills: <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Professional proficiency</span></p>
                      </li>
                      <li className="py-1">
                        <p>IELTS General: <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">6.5</span></p>
                      </li>
                      <li className="py-1">
                        <p>TOEFL Academic: <span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">86</span></p>
                      </li>
                    </ul>
                  </div>
                  {/* end general skills */}
                  {/* links */}
                  <div className="lg:col-span-1 my-4 lg:my-2">
                    <h3 className="font-black text-2xl text-gray-500">Links</h3>
                    <ul className="list-disc list-outside mx-5">
                      <li className="py-1">
                        <p><a href={'https://hooman734.github.io/assets/Masters-Diploma.pdf'} target={'_blank'}><span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Master Diploma</span></a></p>
                      </li>
                       <li className="py-1">
                        <p>Article - January 30 2021, <span className="align-text-bottom italic">2020</span> -   <a href={'https://hesamyan.medium.com/setting-up-dockerfile-github-workflow-86cafd82cf97'} target={'_blank'}><span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Setting up Dockerfile & GitHub Workflow</span></a></p>
                      </li>
                      <li className="py-1">
                        <p>Article - December31 2020, <span className="align-text-bottom italic">2020</span> -   <a href={'https://hesamyan.medium.com/implementing-four-types-of-linked-lists-d812d5c39812'} target={'_blank'}><span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Implementing four types of linked-lists</span></a></p>
                      </li>
                      <li className="py-1">
                        <p>Article - December24 2020, <span className="align-text-bottom italic">2020</span> -   <a href={'https://hesamyan.medium.com/switching-from-networkmanager-to-systemd-networkd-dcbda0b15056'} target={'_blank'}><span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Switching from NetworkManager to systemd-networkd</span></a></p>
                      </li>
                      <li className="py-1">
                        <p>Article - December9 2020, <span className="align-text-bottom italic">2020</span> -   <a href={'https://medium.com/@hesamyan/deploying-a-react-web-application-thats-created-by-create-react-app-2234ddf8eafa'} target={'_blank'}><span className="text-gray-800 font-bold align-text-top text-sm bg-gray-200 rounded">Deploying a React Web Application that's created by create-react-app</span></a></p>
                      </li>
                    </ul>
                  </div>
                  {/* end links */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}
