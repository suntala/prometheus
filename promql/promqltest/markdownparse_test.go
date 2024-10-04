package promqltest

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestParseFunctionDocs(t *testing.T) {
	// 	stringp := `# Testdata for resets() and changes().
	// load 5m
	// 	http_requests{path="/foo"}	1 2 3 0 1 0 0 1 2 0
	// 	http_requests{path="/bar"}	1 2 3 4 5 1 2 3 4 5
	// 	http_requests{path="/biz"}	0 0 0 0 0 1 1 1 1 1

	// # Tests for resets().
	// eval instant at 50m resets(http_requests[5m])
	// 	{path="/foo"} 0
	// 	{path="/bar"} 0
	// 	{path="/biz"} 0`

	// 	testEngine := NewTestEngine(false, 0, DefaultMaxSamplesPerQuery)

	// res, err := RunPromTour(&PromTourTest{}, stringp, testEngine)
	// fmt.Println(res)
	// require.Nil(t, err)
	// require.NotNil(t, err)

	b := ParseFunctionDocs()
	require.NotEmpty(t, b)
}

// func modifyAst(doc ast.Node) ast.Node {
// 	children := doc.GetChildren()
// 	results := []string{}
// 	var result string

// 	for i := 0; i < len(children); i++ {
// 		c := children[i]

// 		if heading, ok := c.(*ast.Heading); ok {
// 			if len(result) > 0 {
// 				results = append(results, result)
// 				result = ""
// 			}
// 			children := heading.GetChildren()
// 			for _, child := range children {
// 				if text, ok := child.(*ast.Text); ok {
// 					fmt.Printf("heading: %s\n\n", text.Literal)
// 					text := string(text.Literal)
// 					result += text
// 				}
// 			}
// 		}
// 		if para, ok := c.(*ast.Paragraph); ok {
// 			children := para.GetChildren()
// 			for _, child := range children {
// 				if text, ok := child.(*ast.Text); ok {
// 					fmt.Printf("para: %s\n\n", text.Literal)
// 					text := string(text.Literal)
// 					result += text
// 				}
// 			}
// 		}
// 	}

// 	results = append(results, result)

// 	fmt.Println(len(results), results)

// 	// ast.WalkFunc(doc, func(node ast.Node, entering bool) ast.WalkStatus {
// 	// 	if heading, ok := node.(*ast.Heading); ok && entering {

// 	// 		children := heading.GetChildren()
// 	// 		for _, child := range children {
// 	// 			if text, ok := child.(*ast.Text); ok {
// 	// 				fmt.Printf("heading: %s\n\n", text.Literal)
// 	// 			}
// 	// 		}
// 	// 	}

// 	// 	if para, ok := node.(*ast.Paragraph); ok && entering {

// 	// 		children := para.GetChildren()
// 	// 		for _, child := range children {
// 	// 			if text, ok := child.(*ast.Text); ok {
// 	// 				fmt.Printf("paragraph: %s\n\n", text.Literal)
// 	// 			}
// 	// 		}
// 	// 	}

// 	// 	// container := node.AsContainer()
// 	// 	// content := string(container.Content)
// 	// 	// literal := string(container.Literal)

// 	// 	// fmt.Printf("content: %s, literal: %s", content, literal)

// 	// 	// if img, ok := node.(*ast.Image); ok && entering {
// 	// 	// 	attr := img.Attribute
// 	// 	// 	if attr == nil {
// 	// 	// 		attr = &ast.Attribute{}
// 	// 	// 	}
// 	// 	// 	// TODO: might be duplicate
// 	// 	// 	attr.Classes = append(attr.Classes, []byte("blog-img"))
// 	// 	// 	img.Attribute = attr
// 	// 	// }

// 	// 	// if link, ok := node.(*ast.Link); ok && entering {
// 	// 	// 	isExternalURI := func(uri string) bool {
// 	// 	// 		return (strings.HasPrefix(uri, "https://") || strings.HasPrefix(uri, "http://")) && !strings.Contains(uri, "blog.kowalczyk.info")
// 	// 	// 	}
// 	// 	// 	if isExternalURI(string(link.Destination)) {
// 	// 	// 		link.AdditionalAttributes = append(link.AdditionalAttributes, `target="_blank"`)
// 	// 	// 	}
// 	// 	// }

// 	// 	return ast.GoToNext
// 	// })
// 	return doc
// }
