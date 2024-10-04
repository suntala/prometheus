package promqltest

import (
	"fmt"

	"github.com/gomarkdown/markdown/ast"
	"github.com/gomarkdown/markdown/parser"
)

// var mds = `# header

// Sample text.

// [link](http://example.com)
// `

// // var printAst = false

// func ParseFunctionDocs() []byte {
// 	md := []byte(mds)
// 	// html := mdToHTML(md)

// 	// create markdown parser with extensions
// 	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock
// 	p := parser.NewWithExtensions(extensions)
// 	doc := p.Parse(md)

// 	// if printAst {
// 	// 	fmt.Print("--- AST tree:\n")
// 	// 	ast.Print(os.Stdout, doc)
// 	// 	fmt.Print("\n")
// 	// }

// 	// create HTML renderer with extensions
// 	htmlFlags := html.CommonFlags | html.HrefTargetBlank
// 	opts := html.RendererOptions{Flags: htmlFlags}
// 	renderer := html.NewRenderer(opts)

// 	h := markdown.Render(doc, renderer)
// 	fmt.Printf("--- Markdown:\n%s\n\n--- HTML:\n%s\n", md, h)

// 	return h
// }

func ParseFunctionDocs() []byte {
	modifyAstExample()
	return nil
}

func modifyAst(doc ast.Node) ast.Node {
	children := doc.GetChildren()
	results := []string{}
	var result string

	for i := 0; i < len(children); i++ {
		c := children[i]

		if heading, ok := c.(*ast.Heading); ok {
			if len(result) > 0 {
				results = append(results, result)
				result = ""
			}
			children := heading.GetChildren()
			for _, child := range children {
				if text, ok := child.(*ast.Text); ok {
					fmt.Printf("heading: %s\n\n", text.Literal)
					text := string(text.Literal)
					result += text
				}
			}
		}
		if para, ok := c.(*ast.Paragraph); ok {
			children := para.GetChildren()
			for _, child := range children {
				if text, ok := child.(*ast.Text); ok {
					fmt.Printf("para: %s\n\n", text.Literal)
					text := string(text.Literal)
					result += text
				}
			}
		}
	}

	results = append(results, result)

	fmt.Println(len(results), results)

	// ast.WalkFunc(doc, func(node ast.Node, entering bool) ast.WalkStatus {
	// 	if heading, ok := node.(*ast.Heading); ok && entering {

	// 		children := heading.GetChildren()
	// 		for _, child := range children {
	// 			if text, ok := child.(*ast.Text); ok {
	// 				fmt.Printf("heading: %s\n\n", text.Literal)
	// 			}
	// 		}
	// 	}

	// 	if para, ok := node.(*ast.Paragraph); ok && entering {

	// 		children := para.GetChildren()
	// 		for _, child := range children {
	// 			if text, ok := child.(*ast.Text); ok {
	// 				fmt.Printf("paragraph: %s\n\n", text.Literal)
	// 			}
	// 		}
	// 	}

	// 	// container := node.AsContainer()
	// 	// content := string(container.Content)
	// 	// literal := string(container.Literal)

	// 	// fmt.Printf("content: %s, literal: %s", content, literal)

	// 	// if img, ok := node.(*ast.Image); ok && entering {
	// 	// 	attr := img.Attribute
	// 	// 	if attr == nil {
	// 	// 		attr = &ast.Attribute{}
	// 	// 	}
	// 	// 	// TODO: might be duplicate
	// 	// 	attr.Classes = append(attr.Classes, []byte("blog-img"))
	// 	// 	img.Attribute = attr
	// 	// }

	// 	// if link, ok := node.(*ast.Link); ok && entering {
	// 	// 	isExternalURI := func(uri string) bool {
	// 	// 		return (strings.HasPrefix(uri, "https://") || strings.HasPrefix(uri, "http://")) && !strings.Contains(uri, "blog.kowalczyk.info")
	// 	// 	}
	// 	// 	if isExternalURI(string(link.Destination)) {
	// 	// 		link.AdditionalAttributes = append(link.AdditionalAttributes, `target="_blank"`)
	// 	// 	}
	// 	// }

	// 	return ast.GoToNext
	// })
	return doc
}

// var mds = `[link](http://example.com)`
// var mds = `## abs()

// abs(v instant-vector) returns`

// for i := 0; i < len(children); i++ {
// 	c := children[i]

// 	if heading, ok := c.(*ast.Heading); ok {
// 		{
// 			children := heading.GetChildren()
// 			for _, child := range children {
// 				if text, ok := child.(*ast.Text); ok {
// 					fmt.Printf("heading: %s\n\n", text.Literal)
// 					name := string(text.Literal)
// 					m[name] = ""
// 				}
// 			}
// 		}
// 		if i + 1 == len(children) {
// 			break
// 		}
// 		{
// 			for j := i + 1; j < len(children); j++ {

// 			}
// 		}

// }
var mds = `## absent_over_time()

absent_over_time(v range-vector) returns an empty vector if the range vector
passed to it has any elements (floats or native histograms) and a 1-element
vector with the value 1 if the range vector passed to it has no elements.

This is useful for alerting on when no time series exist for a given metric name
and label combination for a certain amount of time.

In the first two examples, absent_over_time() tries to be smart about deriving
labels of the 1-element output vector from the input vector.

## abs()

abs(v instant-vector) returns the input vector with all sample values converted to
their absolute value.

## absent()
value
`

func modifyAstExample() {
	md := []byte(mds)

	extensions := parser.CommonExtensions
	p := parser.NewWithExtensions(extensions)
	doc := p.Parse(md)

	doc = modifyAst(doc)

	fmt.Println(doc)

	// htmlFlags := html.CommonFlags
	// opts := html.RendererOptions{Flags: htmlFlags}
	// renderer := html.NewRenderer(opts)
	// html := markdown.Render(doc, renderer)

	// fmt.Printf("-- Markdown:\n%s\n\n--- HTML:\n%s\n", md, html)
}
