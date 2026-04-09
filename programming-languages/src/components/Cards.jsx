import Card from './Card';

const Cards = () => {
    return (
        <div className = "Cards">
            <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' language='Python' color='green' description='Data & Scripting' link='https://docs.python.org/3/'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' language='Java' color='blue' description='General Purpose' link='https://docs.oracle.com/javase/tutorial/'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' language='C' color='red' description='Systems & Performance' link='https://en.wikipedia.org/wiki/C_(programming_language)'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' language='C++' color='red' description='Systems & Performance' link='https://en.wikipedia.org/wiki/C%2B%2B'/>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' language='JavaScript' color='yellow' description = 'Web Development' link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg' language='Assembly' description='Systems & Performance' color = 'red' link='https://web.stanford.edu/class/cs107/guide/x86-64.html'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' language='Go' color='blue' description='General Purpose' link='https://golang.org/'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg'  language='Rust' color='red' description='Systems & Performance' link='https://www.rust-lang.org/'/>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' language='TypeScript' color = 'yellow' description='Web Development' link='https://www.typescriptlang.org/'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' language='C#' color='blue' description='General Purpose' link='https://docs.microsoft.com/en-us/dotnet/csharp/'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' language='PHP' color='yellow' description='Web Development' link='https://www.php.net/docs.php'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' language='Ruby' color='yellow' description='Web Development' link='https://www.ruby-lang.org/en/documentation/'/>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' language='HTML/CSS' color='yellow' description='Web Development' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' language='Swift' color='purple' description='Mobile Development' link='https://developer.apple.com/swift/'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' language='Kotlin' color='purple' description='Mobile Development' link='https://kotlinlang.org/'/>
                            <td></td>
                            <Card image='https://img.icons8.com/fluent/1200/pascal.jpg' language='Pascal' color='yellow' description='General Purpose' link='https://en.wikipedia.org/wiki/Pascal_(programming_language)'/>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' language='R' color='green' description='Data & Scripting' link='https://www.r-project.org/'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' language='MATLAB' color='green' description='Data & Scripting' link='https://www.mathworks.com/products/matlab.html'/>
                            <td></td>
                            <Card image='https://img.icons8.com/fluent/1200/sql.jpg' language='SQL' color='green' description='Data & Scripting' link='https://en.wikipedia.org/wiki/SQL'/>
                            <td></td>
                            <Card image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg' language='Perl' color='green' description='Data & Scripting' link='https://www.perl.org/'/>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default Cards;