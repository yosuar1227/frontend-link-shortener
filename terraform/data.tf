data "aws_iam_policy_document" "s3_polcicy_document" {
  statement {
    sid = "S3GetObjectForCloudFront"
    actions = [
      "s3:GetObject",
      "s3:ListBucket"
    ]

    resources = [
     "add correct data here"
    ]


    principals {
      type = "AWS"
      identifiers = [ "" ] //identifier of clufront
    }
  }
}